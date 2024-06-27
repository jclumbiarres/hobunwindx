import { Home } from "$pages/Home";
import { Header } from "./Header";
import { JSX } from "hono/jsx";
import { html } from "hono/html";

/**
 * Renders the layout component.
 * 
 * @param children - The content to be rendered inside the layout.
 * @returns The HTML markup for the layout.
 */
export const Layout = ({ children }: { children: JSX.HTMLAttributes }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="/js/htmx.min.js"></script>
      <script defer src="/js/alpinejs.min.js"></script>
      <link rel="stylesheet" href="/css/index.css" />
      <title>Ejemplo de SSR</title>
    </head>
    <body>
      ${Header()}
      <main id="root">${children}</main>
    </body>
  </html>
`;

/**
 * Renders the content component within the layout.
 * @returns The JSX element representing the content component within the layout.
 */
export const Content = async () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
