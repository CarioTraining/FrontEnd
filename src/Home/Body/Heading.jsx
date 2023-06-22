import styles from "./Heading.module.css";
export default function Heading() {
  return (
    <div className="h-25 d-flex justify-content-evenly">
      <small className={styles.text + " w-100 pt-4 "}>Our Sponsors</small>
    </div>
  );
}
