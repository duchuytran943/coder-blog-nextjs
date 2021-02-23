import styles from "styles/components/Navbar.module.scss";
import CustomLink from "./CustomLink";

const NavbarList = () => {
  return (
    <ul className={styles.listItem}>
      <li className={`${styles.item} ${styles.active} `}>
        <CustomLink href={"/"} as={"/"} className={styles.itemWrap}>
          <span>Home</span>
        </CustomLink>
      </li>
      <li className={styles.item}>
        <CustomLink
          href={"/user/login"}
          as={"/user/login"}
          className={styles.itemWrap}
        >
          <span>Sign in</span>
        </CustomLink>
      </li>
      <li className={styles.item}>
        <CustomLink
          href={"/user/register"}
          as={"/user/register"}
          className={styles.itemWrap}
        >
          <span>Sign up</span>
        </CustomLink>
      </li>
    </ul>
  );
};

export default NavbarList;
