import { Logo } from "components/common";
import styles from "styles/components/Footer.module.scss";

const Footer = () => (
  <>
    <div className={styles.footerWrap}>
      <div className={styles.footer}>
        <Logo className={styles.logo}></Logo>
        <div className={styles.blogInfo}>
          © 2021. Pet Blog project of mine base on Thinkster.
        </div>
      </div>
    </div>
  </>
);

export default Footer;
