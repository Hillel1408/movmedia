import { useContext } from "react";
import { ModalContext } from "../../../pages/Main";
import { BackButton } from "../../../components";
import styles from "./LayoutPageModal.module.scss";

export default function LayoutPageModal({ children }) {
    const value = useContext(ModalContext);

    return (
        <div className={styles.layoutPageModal}>
            <BackButton clickHandler={() => value("")} />
            {children}
        </div>
    );
}
