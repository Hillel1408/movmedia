import React from "react";
import { LayoutModal } from "../../index";
import styles from "./InformationSystems.module.scss";

export default function InformationSystems() {
    const list = [
        { title: "АСЭЗ", text: "Автоматизированная система электронных\nзакупок ПАО «Газпром»." },
        { title: "ЕИС", text: "Единая информационная система в сфере\nзакупок товаров, работ, услуг." },
        { title: "ЭТП ГПБ", text: "Электронная торговая площадка\nГазпромбанка (п. 1.2.50 Положения)." },
        { title: "ИУС МТР", text: "Информационно-управляющая система\nматериально-технических ресурсов ПАО\n«Газпром»" },
        { title: "ПУР АСБУ", text: "Автоматизированная система бюджетного\nуправления: подсистема управления\nрасчетами." },
    ];

    return (
        <LayoutModal>
            <div className={styles.informationSystems}>
                <h2 className="modal-subtitle">Регистрация в информационных системах</h2>
                <p className="text-s">Для работы с закупками компании нужно зарегистрироваться в нескольких системах:</p>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <p className="text-xs">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </LayoutModal>
    );
}
