import { useContext } from "react";
import { ModalContext } from "../../../pages/Main";
import styles from "./LayoutModal.module.scss";

export default function LayoutModal({ children }) {
    const value = useContext(ModalContext);

    return (
        <div className={styles.layoutModal}>
            <button className="icon-cancel" onClick={() => value("")}></button>
            {children}
        </div>
    );
}
