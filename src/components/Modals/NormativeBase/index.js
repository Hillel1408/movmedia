import React from "react";
import { LayoutModal, List } from "../../index";
import styles from "./NormativeBase.module.scss";

export default function NormativeBase() {
    const list = [
        { title: "Положение о закупках", text: "Утверждается уполномоченным\nорганом управления организации", button: "(Ст.2 №223-ФЗ)." },
        {
            title: "Перечень ВЗЛ",
            text: "Перечень взаимозависимых с заказчиком лиц (ВЗЛ)\nдля целей применения положения о закупках является\nнеотъемлемой частью Положения о закупках",
            button: "(Ст.1 №223-ФЗ).",
        },
        { title: "Регламентные документы", text: "Регламентные документы в сфере закупок\n(оформляются приказом, инструкцией\n(регламентом)." },
    ];

    return (
        <LayoutModal>
            <div className={styles.normativeBase}>
                <h2 className="modal-subtitle">
                    Для перехода на систему управления закупочной деятельностью в соответствии с корпоративными правилами Группы Газпром компания должна создать
                    нормативную базу:
                </h2>
                <List list={list} color="#F48A2C" />
            </div>
        </LayoutModal>
    );
}
