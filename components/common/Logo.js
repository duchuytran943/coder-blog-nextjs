import styles from "styles/components/Navbar.module.scss";
import CustomLink from "./CustomLink";

const Logo = () => {
  return (
    <CustomLink href={"/"} as={"/"}>
      <h1 className={styles.logo}>HuyTran's Blog</h1>
    </CustomLink>
  );
};

export default Logo;
