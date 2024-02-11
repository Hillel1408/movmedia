import classNames from "classnames";
import styles from "./Switcher.module.scss";

export default function Switcher({ activeSwitcher, setActiveSwitcher }) {
    return (
        <div
            className={classNames(styles.root, activeSwitcher && styles.active)}
            onClick={() => {
                setActiveSwitcher((prev) => !prev);
            }}
        >
            <div></div>
            <span className="text-s">223-ФЗ</span>
        </div>
    );
}
