import React from "react";
import styles from "./LayoutModal.module.scss";

export default function LayoutModal({ children }) {
    return (
        <div className={styles.layoutModal}>
            <button className="icon-cancel"></button>
            {children}
        </div>
    );
}
