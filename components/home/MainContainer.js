import styles from "styles/components/MainContainer.module.scss";
import { ContentContainer, SideContainer } from "components/home";

const MainContent = () => {
  return (
    <div className={styles.mainContainerWrap}>
      <div className={styles.mainContainer}>
        <ContentContainer></ContentContainer>
        <SideContainer></SideContainer>
      </div>
    </div>
  );
};

export default MainContent;
