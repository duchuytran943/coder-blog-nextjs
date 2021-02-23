import Link from "next/link";

const CustomLink = ({ className, href, as, onClick, children }) => (
  <Link href={href} as={as} passHref onClick={onClick}>
    <a className={className || ""}>{children}</a>
  </Link>
);

export default CustomLink;
