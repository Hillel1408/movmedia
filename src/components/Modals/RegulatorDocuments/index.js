import React from "react";
import { LayoutPageModal } from "../../index";
import styles from "./RegulatorDocuments.module.scss";

export default function RegulatorDocuments() {
    const gridList = [
        "Федеральный закон\n№223-ФЗ",
        "Постановление\nи положение\nПравительства РФ № 1352",
        "Постановление\nПравительства РФ №932",
        "Постановление\nПравительства РФ\n№908",
        "Постановление\nПравительства РФ\n№1169",
        "Постановление\nПравительства РФ\n№1442",
        "Распоряжение\nПравительства РФ\n№475-р",
        "Распоряжение\nПравительства РФ\n№2258-р",
        "Распоряжение\nПравительства РФ №717-р",
    ];

    return (
        <LayoutPageModal>
            <div className={styles.regulatorDocuments}>
                <img src="/images/normative-base/img-1.webp" alt=""></img>
                <h2 className="title">
                    Регламентные
                    <br />
                    документы
                </h2>
                <div className={styles.regulatorDocumentsGrid}>
                    <h3 className="subtitle">Нормативные акты, которыми в том числе необходимо руководствоваться</h3>
                    <div>
                        {gridList.map((item, index) => (
                            <div className={styles.regulatorDocumentsGridItem}>
                                <span className="text-s">{item}</span>
                                <div className="text-xs">0{index + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutPageModal>
    );
}
