import { ALink } from "../core/Link";
export const Header = () => {
  return (
    <header class="bg-gray-800 py-4">
      <nav class="container mx-auto flex justify-between items-center">
        <ALink
          className="text-white text-lg font-bold"
          url="/home"
          desc="Home"
        />
        <ALink
          className="text-white text-lg font-bold"
          url="/about"
          desc="About"
        />
        <ALink
          className="text-white text-lg font-bold"
          url="/contact"
          desc="Contact"
        />
        <ALink
          className="text-white text-lg font-bold"
          url="/login"
          desc="Login"
        />
      </nav>
    </header>
  );
};
