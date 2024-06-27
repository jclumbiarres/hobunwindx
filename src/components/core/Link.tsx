import { FC } from "hono/jsx";

interface ALinkProps {
  className: string;
  url: string;
  desc: string;
  target?: string;
}

/**
 * A custom link component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.className - The CSS class name for the link.
 * @param {string} props.url - The URL for the link.
 * @param {string} props.desc - The description for the link.
 * @param {string} [props.target] - The target for the link. Defaults to "#root".
 * @returns {JSX.Element} The link component.
 */
export const ALink: FC<ALinkProps> = ({ className, url, desc, target }) => {
  return (
    <a className={className} href="#" hx-get={url} hx-target={target || "#root"}>
      {desc}
    </a>
  );
};
