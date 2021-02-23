import styles from "styles/components/Navbar.module.scss";
import Logo from "./Logo";
import NavbarList from "./NavbarList";

const Navbar = ({ children }) => (
  <>
    <nav className={styles.navBarWrap}>
      <div className={styles.navBar}>
        <Logo></Logo>
        <NavbarList></NavbarList>
      </div>
    </nav>
  </>
);

export default Navbar;
