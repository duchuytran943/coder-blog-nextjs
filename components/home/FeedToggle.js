import { CustomLink } from "components/common";
import styles from "styles/components/FeedToggle.module.scss";

const FeedToggle = () => {
  return (
    <div className={styles.feedToggleWrap}>
      <ul className={styles.feedToggle}>
        <li className={styles.item}>
          <CustomLink href={"/"} as={"/"}>
            <span>Global Feed</span>
          </CustomLink>
        </li>
        <li className={`${styles.item} ${styles.active}`}>
          <CustomLink href={"/"} as={"/"}>
            <span># Tag</span>
          </CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
