import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { Database } from "bun:sqlite";

import { Content } from "$components/layout/Layout";
import { Home } from "$pages/Home";
import { Contact } from "$pages/Contact";
import { About } from "$pages/About";
import { QueryBuilder } from "$lib/queryBuilder";
import { Login } from "$components/pages/Login";

const app = new Hono();

const db = new QueryBuilder(new Database("./src/db.sqlite"));
db.createTable("users", [
  "id INTEGER PRIMARY KEY",
  "name TEXT",
  "password TEXT",
]);
db.insertInto("users", ["name", "password"], ["admin", "admin"]).execute();

app.use(logger());
app.use("/js/htmx.min.js", serveStatic({ path: "./src/js/htmx.min.js" }));
app.use("/css/index.css", serveStatic({ path: "./src/css/index.css" }));
app.use("/js/alpinejs.min.js", serveStatic({ path: "./src/js/alpinejs.min.js" }));
app.use("/js/chart.min.js", serveStatic({ path: "./src/js/chart.min.js" }));

app.get("/", (c) => {
  return c.html(Content());
});

app.get("/home", (c) => {
  return c.html(Home());
});

app.get("/contact", (c) => {
  return c.html(Contact());
});

app.get("/about", (c) => {
  return c.html(About());
});
app.get("/login", (c) => {
  return c.html(Login());
});

process.on("SIGINT", () => {
  console.log("Closing database connection");
  db.close();
  process.exit(0);
});

export default app;
