import { useEffect, useState } from "react";
import styles from "./Brand.module.css";
import { SiSkoda } from "react-icons/si";
import { SiSuzuki } from "react-icons/si";
import { SiToyota } from "react-icons/si";
export default function Brand(props) {
  return (
    <div
      className={
        styles.container + " w-100 d-flex justify-content-evenly pt-5 "
      }
    >
      <div className={styles.card + " d-flex justify-content-between "}>
        <img
          className={styles.logo + " mt-2 ms-2 "}
          src={props.brand.logo}
          alt=""
        />
        <div className={styles.description + " ms-3 "}>
          <small className="fs-1 mt-2 d-flex justify-content-evenly">
            <span className="d-flex align-items-center">
              {props.brand.id === 1 ? (
                <SiSkoda className="me-3" />
              ) : props.brand.id === 2 ? (
                <SiToyota className="me-3" />
              ) : (
                <SiSuzuki className="me-3" />
              )}
              {props.brand.name}
            </span>
          </small>
          <p className="fs-5 mt-3 me-3">{props.brand.description}</p>
        </div>
      </div>
    </div>
  );
}
