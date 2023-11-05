import styles from "./Spinner.module.scss";

export default function Spinner() {
  // Spinner courtesy of https://loading.io
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
