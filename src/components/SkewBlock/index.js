import React from "react";
import styles from "./SkewBlock.module.scss";

export default function SkewBlock({ color }) {
    return (
        <div className={styles.skewBlock} style={{ backgroundColor: color }}>
            <div style={{ backgroundColor: color }}></div>
        </div>
    );
}
