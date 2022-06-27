import IgniteLogo from "../../assets/ignite-logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <strong className={styles.header}>
      <img src={IgniteLogo} alt='Logotipo do ignite' /> Ignite Feed
    </strong>
  );
};
