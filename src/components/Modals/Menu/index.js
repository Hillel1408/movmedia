import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "../../index";
import styles from "./Menu.module.scss";
import classNames from "classnames";

export default function Menu({ activeModal, setActiveModal }) {
    const [active, setActive] = useState(activeModal);

    const navItems = [
        {
            title: "Создать нормативную базу",
            modals: [
                { title: "Положение о закупках", modal: "" },
                { title: "Перечень ВЗЛ", modal: "" },
                { title: "Регламентные документы", modal: "" },
            ],
        },
        {
            title: "Организовать работу в информационных системах",
            modals: [
                { title: "АСЭЗ", modal: "" },
                { title: "ЕИС", modal: "" },
                { title: "ЭТП ГПБ", modal: "" },
                { title: "ИУС МТР", modal: "" },
                { title: "ПУР АСБУ", modal: "" },
            ],
        },
        {
            title: "Наладить взаимодействие участников процесса",
            modals: [
                { title: "Закупочное подразделение", modal: "" },
                { title: "Закупочная комиссия", modal: "" },
                { title: "Ответственные за работу в АСЭЗ/ЕИС", modal: "" },
                { title: "Организатор закупок", modal: "" },
            ],
        },
        { title: "Обеспечить контроль, работу с договорами, формирование отчетности", modals: [] },
        {
            title: "Настроить отдельные элементы планирования",
            modals: [
                { title: "Формирование потребности", modal: "" },
                { title: "Закупки у СМСП", modal: "" },
                { title: "Закупки квотируемых товаров", modal: "" },
                { title: "Закупки у ВЗЛ", modal: "" },
            ],
        },
    ];

    return createPortal(
        <>
            <Overlay
                clickHandler={() => {
                    setActiveModal("");
                }}
            />
            <div
                onClick={() => {
                    setActiveModal("");
                }}
                className={classNames("container", styles.menuContainer)}
            >
                <div onClick={(e) => e.stopPropagation()} className={classNames(styles.menu, activeModal && styles.menuActive)}>
                    <ul>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setActive(item.title);
                                }}
                            >
                                <span>{item.title}</span>
                                {item.modals.length > 0 && (
                                    <ul className={classNames("text-s", active === item.title && styles.active)}>
                                        {item.modals.map((item, index) => (
                                            <li>{item.title}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>,
        document.getElementById("portal"),
    );
}
