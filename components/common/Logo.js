import styles from "styles/components/Logo.module.scss";
import CustomLink from "./CustomLink";

const Logo = ({ className }) => {
  return (
    <CustomLink href={"/"} as={"/"}>
      <h1 className={className || styles.logo}>HuyTran's Blog</h1>
    </CustomLink>
  );
};

export default Logo;
