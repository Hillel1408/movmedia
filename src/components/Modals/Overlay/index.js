import React from "react";
import styles from "./Overlay.module.scss";

export default function Overlay({ clickHandler }) {
    return (
        <div
            onClick={() => {
                clickHandler();
            }}
            className={styles.overlay}
        ></div>
    );
}
