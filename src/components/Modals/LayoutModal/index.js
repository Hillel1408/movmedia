import { useContext } from "react";
import { ModalContext } from "../../../components/Modals/Menu";
import styles from "./LayoutModal.module.scss";

export default function LayoutModal({ children }) {
    const value = useContext(ModalContext);

    return (
        <div className={styles.layoutModal}>
            <button className="icon-cancel" onClick={() => value.closeModal("")}></button>
            {children}
        </div>
    );
}
