import React from "react";
import classNames from "classnames";
import styles from "./BackButton.module.scss";

export default function BackButton({ clickHandler }) {
    return (
        <button className={classNames("text-s", "icon-chevron-right", styles.root)} onClick={() => clickHandler()}>
            назад
        </button>
    );
}
