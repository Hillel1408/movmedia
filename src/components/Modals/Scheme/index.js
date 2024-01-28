import { createPortal } from "react-dom";
import styles from "./Scheme.module.scss";

export default function Scheme() {
    return createPortal(<div className={styles.scheme}></div>, document.getElementById("portal"));
}
