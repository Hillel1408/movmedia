import { useState } from "react";
import classNames from "classnames";
import styles from "./Switcher.module.scss";

export default function Switcher() {
    const [active, setActive] = useState(false);

    return (
        <div
            className={classNames(styles.switcher, active && styles.switcherActive)}
            onClick={() => {
                setActive((prev) => !prev);
            }}
        >
            <div></div>
            <span className="text-s">223-ФЗ</span>
        </div>
    );
}
