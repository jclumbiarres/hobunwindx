import { Database } from "bun:sqlite";

interface IQuery {
  select(...campos: string[]): this;
  from(tabla: string): this;
  where(condicion: string, params: any[]): this;
  insertInto(table: string, fields: string[], values: any[]): this;
  update(table: string): this;
  set(fields: string[], values: any[]): this;
  deleteFrom(table: string): this;
  innerJoin(table: string, condition: string): this;
  leftJoin(table: string, condition: string): this;
  rightJoin(table: string, condition: string): this;
  join(table: string, condition: string): this;
  createTable(name: string, fields: string[]): void;
  dropTable(name: string): void;
  build(): string;
  execute(): any;
  close(): void;
}

class QBuilderErr extends Error {
  constructor(message: string) {
    super(message);
    this.name = "QueryBuilderError";
    this.message = message;
  }
}

export class QueryBuilder implements IQuery {
  private query: string[] = [];
  private params: any[] = [];
  private db: Database;

  constructor(db: Database) {
    this.db = db;
    this.db.exec("PRAGMA journal_mode = WAL;");
  }
  // Queries
  select(...campos: string[]): this {
    this.query.push(`SELECT ${campos.join(", ")}`);
    return this;
  }

  from(tabla: string): this {
    this.query.push(`FROM ${tabla}`);
    return this;
  }

  where(condicion: string, params: any[]): this {
    this.query.push(`WHERE ${condicion}`);
    this.params.push(...params);
    return this;
  }

  // CRUD
  insertInto(table: string, fields: string[], values: any[]): this {
    const placeholders = values.map((_, i) => `?${i + 1}`).join(", ");
    this.query.push(
      `INSERT INTO ${table} (${fields.join(", ")}) VALUES (${placeholders})`
    );
    this.params.push(...values);
    return this;
  }

  update(table: string): this {
    this.query.push(`UPDATE ${table}`);
    return this;
  }

  set(fields: string[], values: any[]): this {
    const updates = fields.map((field, index) => `${field} = ?${index + 1}`);
    this.query.push(`SET ${updates.join(", ")}`);
    this.params.push(...values);
    return this;
  }

  deleteFrom(table: string): this {
    this.query.push(`DELETE FROM ${table}`);
    return this;
  }
  // Relationship

  leftJoin(table: string, condition: string): this {
    this.query.push(`LEFT JOIN ${table} ON ${condition}`);
    return this;
  }

  rightJoin(table: string, condition: string): this {
    this.query.push(`RIGHT JOIN ${table} ON ${condition}`);
    return this;
  }

  innerJoin(table: string, condition: string): this {
    this.query.push(`INNER JOIN ${table} ON ${condition}`);
    return this;
  }

  join(table: string, condition: string): this {
    this.query.push(`JOIN ${table} ON ${condition}`);
    return this;
  }

  // utils
  build(): string {
    return this.query.join(" ");
  }

  // Tables
  createTable(name: string, fields: string[]): void {
    this.query.push(
      `CREATE TABLE IF NOT EXISTS ${name} (${fields.join(", ")});`
    );
    this.execute();
  }

  dropTable(name: string): void {
    this.query.push(`DROP TABLE IF EXISTS ${name};`);
    this.execute();
  }

  execute(): any {
    try {
      const query = this.build();
      const sql = this.db.query(query);
      const output = sql.all(...this.params);
      this.query = [];
      this.params = [];
      return output;
    } catch (error: unknown) {
      if (error instanceof QBuilderErr) {
        throw new QBuilderErr(error.message);
      } else {
        throw new QBuilderErr(error as string);
      }
    }
  }

  close(): void {
    this.db.close();
  }
}
