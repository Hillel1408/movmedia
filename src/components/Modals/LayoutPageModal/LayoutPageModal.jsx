import { BackButton } from "../../index";
import styles from "./LayoutPageModal.module.scss";

export default function LayoutPageModal({ children, clickHandler = () => {} }) {
    return (
        <div className={styles.root}>
            <BackButton clickHandler={() => clickHandler()} />
            {children}
        </div>
    );
}
