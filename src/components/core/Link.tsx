import { FC } from "hono/jsx";

interface ALinkProps {
  className: string;
  url: string;
  desc: string;
}

export const ALink: FC<ALinkProps> = ({ className, url, desc }) => {
  return (
    <a className={className} href="#" hx-get={url} hx-target="#root">
      {desc}
    </a>
  );
};
