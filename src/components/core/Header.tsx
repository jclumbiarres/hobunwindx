import { ALink } from "./Link";
export const Header = () => {
  return (
    <header class="bg-gray-800 py-4">
      <nav class="container mx-auto flex justify-between items-center">
        <ALink
          className="text-white text-lg font-bold"
          url="/home"
          desc="Home"
        />
        <a
          href="#"
          hx-get="/about"
          hx-target="#root"
          class="text-white text-lg font-bold"
        >
          About
        </a>
        <a
          href="#"
          hx-get="/contact"
          hx-target="#root"
          class="text-white text-lg font-bold"
        >
          Contact
        </a>
        <a
          href="#"
          hx-get="/login"
          hx-target="#root"
          class="text-white text-lg font-bold"
        >
          Login
        </a>
      </nav>
    </header>
  );
};
