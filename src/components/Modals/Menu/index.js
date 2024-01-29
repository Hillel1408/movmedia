import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalsSwitcn } from "../../index";
import styles from "./Menu.module.scss";
import classNames from "classnames";

export default function Menu({ activeModal, setActiveModal }) {
    const [active, setActive] = useState(activeModal);

    const navItems = [
        {
            title: "Создать нормативную базу",
            modal: "normative-base",
            color: "#F48A2C",
            modals: [
                { title: "Положение о закупках", modal: "" },
                { title: "Перечень ВЗЛ", modal: "" },
                { title: "Регламентные документы", modal: "" },
            ],
        },
        {
            title: "Организовать работу в информационных системах",
            modal: "information-systems",
            color: "#5545D7",
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
            modal: "list-of-participants",
            color: "#39A1ED",
            modals: [
                { title: "Закупочное подразделение", modal: "" },
                { title: "Закупочная комиссия", modal: "" },
                { title: "Ответственные за работу в АСЭЗ/ЕИС", modal: "responsible-ASEZEIS" },
                { title: "Организатор закупок", modal: "" },
            ],
        },
        { title: "Обеспечить контроль, работу с договорами, формирование отчетности", modal: "working-with-contracts", color: "#9CC040", modals: [] },
        {
            title: "Настроить отдельные элементы планирования",
            modal: "planning-elements",
            color: "#F46C63",
            modals: [
                { title: "Формирование потребности", modal: "" },
                { title: "Закупки у СМСП", modal: "" },
                { title: "Закупки квотируемых товаров", modal: "" },
                { title: "Закупки у ВЗЛ", modal: "" },
            ],
        },
    ];

    useEffect(() => {
        console.log(active);
    }, [active]);

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
                <div onClick={(e) => e.stopPropagation()} className={classNames(styles.menu, active && styles.menuActive)}>
                    <ul>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    setActive(item.modal);
                                }}
                                style={{ outline: (active === item.modal || item.modals.find((el) => el.modal === active)) && `2px solid ${item.color}` }}
                            >
                                <span>{item.title}</span>
                                {item.modals.length > 0 && (
                                    <ul
                                        className={classNames("text-s")}
                                        style={{ maxHeight: (active === item.modal || item.modals.find((el) => el.modal === active)) && "700px" }}
                                    >
                                        {item.modals.map((el, index) => (
                                            <li
                                                key={index}
                                                style={{
                                                    backgroundColor: active === el.modal && `${item.color}`,
                                                    color: active === el.modal && "white",
                                                }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActive(el.modal);
                                                }}
                                            >
                                                {el.title}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <ModalsSwitcn modal={active} />
            </div>
        </>,
        document.getElementById("portal"),
    );
}
