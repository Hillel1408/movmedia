import React from "react";
import { LayoutModal, List } from "../../index";
import styles from "./ListOfParticipants.module.scss";

export default function ListOfParticipants() {
    const list = [
        { title: "Закупочное подразделение" },
        { title: "Закупочная комиссия" },
        { title: "Ответственные за работу в ЕИС и АСЭЗ" },
        { title: "Организатор закупок" },
    ];
    return (
        <LayoutModal>
            <div className={styles.listOfParticipants}>
                <h2 className="modal-subtitle">Состав участников</h2>
            </div>
            <List list={list} color="#39A1ED" />
        </LayoutModal>
    );
}
