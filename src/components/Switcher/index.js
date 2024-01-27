import React, { useState } from "react";
import styles from "./Switcher.module.scss";
import classNames from "classnames";

export default function Switcher() {
    const [active, setActive] = useState(false);

    return (
        <div className={classNames(styles.switcher, active && styles.switcherActive)}>
            <div
                onClick={() => {
                    setActive((prev) => !prev);
                }}
            ></div>
            <span className="text-s">223-ФЗ</span>
        </div>
    );
}
