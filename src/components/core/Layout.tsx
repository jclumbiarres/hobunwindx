import { Home } from "$pages/Home";
import { Header } from "./Header";
import { JSX } from "hono/jsx";
import { html } from "hono/html";

export const Layout = ({ children }: { children: JSX.HTMLAttributes }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="/js/htmx.min.js"></script>
      <link rel="stylesheet" href="/css/index.css" />
      <title>Ejemplo de SSR</title>
    </head>
    <body>
      ${Header()}
      <main id="root">${children}</main>
    </body>
  </html>
`;

export const Content = async () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
