import React, { useState } from "react";
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
                { title: "Положение о закупках", modal: "procurement-regulations" },
                { title: "Перечень ВЗЛ", modal: "list-of-vzl" },
                { title: "Регламентные документы", modal: "regulator-documents" },
            ],
        },
        {
            title: "Организовать работу в информационных системах",
            modal: "information-systems",
            color: "#5545D7",
            modals: [
                { title: "АСЭЗ", modal: "asez" },
                { title: "ЕИС", modal: "eis" },
                { title: "ЭТП ГПБ", modal: "etpgpb" },
                { title: "ИУС МТР", modal: "iusmtr" },
                { title: "ПУР АСБУ", modal: "purasbu" },
            ],
        },
        {
            title: "Наладить взаимодействие участников процесса",
            modal: "list-of-participants",
            color: "#39A1ED",
            modals: [
                { title: "Закупочное подразделение", modal: "purchasing-division" },
                { title: "Закупочная комиссия", modal: "purchasing-commission" },
                { title: "Ответственные за работу в АСЭЗ/ЕИС", modal: "responsible-ASEZEIS" },
                { title: "Организатор закупок", modal: "procurement-organizer" },
            ],
        },
        { title: "Обеспечить контроль, работу с договорами, формирование отчетности", modal: "working-with-contracts", color: "#9CC040", modals: [] },
        {
            title: "Настроить отдельные элементы планирования",
            modal: "planning-elements",
            color: "#F46C63",
            modals: [
                { title: "Формирование потребности", modal: "formation-of-need" },
                { title: "Закупки у СМСП", modal: "smsp" },
                { title: "Закупки квотируемых товаров", modal: "purchase-of-goods" },
                { title: "Закупки у ВЗЛ", modal: "vzl" },
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
            <div className={classNames("container", styles.menuContainer)}>
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
                                                    el.modal && setActive(el.modal);
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
