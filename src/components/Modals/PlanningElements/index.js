import React from "react";
import { LayoutModal, List } from "../../index";
import styles from "./PlanningElements.module.scss";

export default function PlanningElements() {
    const list = [
        { title: "Формирование потребностей и плана закупок" },
        { title: "Закупки у СМСП" },
        { title: "Закупки у квотируемых товаров" },
        { title: "Закупки у ВЗЛ" },
    ];

    return (
        <LayoutModal>
            <div className={styles.root}>
                <h2 className="modal-subtitle">Элементы планирования</h2>
            </div>
            <List list={list} color="#F46C63" />
        </LayoutModal>
    );
}
