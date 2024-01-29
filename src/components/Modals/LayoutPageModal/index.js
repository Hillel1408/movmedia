import React from "react";
import styles from "./LayoutPageModal.module.scss";
import classNames from "classnames";

export default function LayoutPageModal({ children }) {
    return (
        <div className={styles.layoutPageModal}>
            <button className={classNames("text-s", "icon-chevron-right")}>назад</button>
            {children}
        </div>
    );
}
