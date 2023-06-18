import styles from "./NavBar.module.css";
import { useState } from "react";
import carioLogo from "./carioLogo.png";
export default function NavBar() {
  const [signed, setSigned] = useState(false);

  return (
    <div className={styles.bar + " d-flex justify-content-between pt-2 "}>
      <a
        className={styles.logo_whole + " d-flex align-items-center ms-1 mb-1 "}
        href="/home"
      >
        <img className={styles.logo} src={carioLogo} alt="hi" />
        <span className={styles.logo_name + " display-6 "}>Cario</span>
      </a>
      {signed === false ? (
        <span className="w-100 d-flex flex-row-reverse me-2">
          <button className={styles.reg_buttons + " ms-2 "}>Log In</button>
          <button className={styles.reg_buttons}>Sign Up</button>
        </span>
      ) : (
        <span className="w-100 d-flex flex-row-reverse me-2">
          <button className={styles.logout_button}>Log Out</button>
        </span>
      )}
    </div>
  );
}
