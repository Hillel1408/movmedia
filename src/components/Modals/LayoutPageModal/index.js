import React from "react";
import { BackButton } from "../../../components";
import styles from "./LayoutPageModal.module.scss";

export default function LayoutPageModal({ children }) {
    return (
        <div className={styles.layoutPageModal}>
            <BackButton />
            {children}
        </div>
    );
}
