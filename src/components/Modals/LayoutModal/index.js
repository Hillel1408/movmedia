import React from "react";
import styles from "./LayoutModal.module.scss";
import classNames from "classnames";

export default function LayoutModal({ children }) {
    return (
        <div className={styles.layoutModal}>
            <button className="icon-cancel"></button>
            {children}
        </div>
    );
}
