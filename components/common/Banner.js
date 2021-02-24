import styles from "styles/components/Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.banner}>
        <h2 className={styles.title}>HuyTran's blog</h2>
        <p className={styles.moreInfo}>I using Nextjs to do it</p>
      </div>
    </div>
  );
};

export default Banner;
