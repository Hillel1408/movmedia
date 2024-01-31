import classNames from "classnames";
import { Switcher, Menu, Scheme } from "../../components";
import styles from "./Main.module.scss";
import { useState } from "react";

export default function Main() {
    const [activeModal, setActiveModal] = useState("");

    const list = [
        "государственные корпорации;",
        "государственные компании;",
        "публично-правовые компании;",
        "субъекты естественных монополий;",
        "организации, осуществляющие регулируемые виды деятельности в сфере электроснабжения, газоснабжения, теплоснабжения, водоснабжения, водоотведения, очистки сточных вод, обращения с твердыми коммунальными отходами, автономными учреждениями, хозяйственные общества, в уставном капитале которых доля участия Российской Федерации, субъекта Российской Федерации, муниципального образования в совокупности превышает 50%;",
        "дочерние хозяйственные общества, в уставном капитале которых более 50% долей в совокупности принадлежит указанным выше юридическим лицам;",
        "дочерние хозяйственные общества, в уставном капитале которых более 50% долей в совокупности принадлежит указанным выше дочерним хозяйственным обществам.",
    ];
    const buttons = [
        { text: "Создать нормативную базу", icon: "icon-box-edit", modal: "normative-base" },
        { text: "Организовать работу в информационных системах", icon: "icon-display-settings", modal: "information-systems" },
        { text: "Наладить взаимодействие участников процесса", icon: "icon-groups", modal: "list-of-participants" },
        { text: "Настроить отдельные элементы планирования", icon: "icon-monitoring", modal: "working-with-contracts" },
        { text: "Обеспечить контроль, работу с договорами, формирование отчетности", icon: "icon-folder-open", modal: "planning-elements" },
    ];

    return (
        <>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.headerFlex}>
                        <div>
                            <div className={styles.headerBtn}>
                                <button className={classNames("icon-deployed-code-alert", "text-xs")}>
                                    Почему моей компании нужно переходить на корпоративные закупочные стандарты Группы Газпром?
                                </button>
                                <p className="text-xs">
                                    Компании Группы Газпром ведут свою закупочную деятельность в соответствии с едиными правилами и в соответствии с принципами,
                                    установленными в Положении о закупках товаров, работ, услуг ПАО «Газпром» и Компаний Группы Газпром — Положение ПАО
                                    «Газпром».
                                </p>
                            </div>
                            <h2 className="subtitle">
                                Что необходимо сделать для организации закупочного деятельности по единым требованиям в Группе Газпром?
                            </h2>
                            <p className="text-s">
                                Для организации закупочного процесса в соответствии с корпоративными правилами Группы Газпром необходимо сформировать
                                инфраструктуру системы управления закупочной деятельностью и настроить работу всех ее элементов.
                            </p>
                        </div>
                        <div>
                            <div className={styles.headerSecondaryFlex}>
                                <div>
                                    <p className={classNames("text-medium-xs", "icon-notification-important")}>
                                        Обратите внимание, состав мероприятий относится к заказщикам, работающим по 223-ФЗ.
                                    </p>
                                    <div className={styles.headerLinkBtn}>
                                        <button className={classNames("text-s", "icon-chevron-right")}>Кто к ним относится</button>
                                        <ul className="text-s">
                                            {list.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <Switcher />
                            </div>
                            <button className={classNames(styles.headerSecondaryBtn, "icon-tabs", "text-medium-s")}>
                                Перед началом обучения предлагаем ознакомиться с тем, как устроена закупочная система
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <img src="/images/main/main.webp" alt=""></img>
                    {buttons.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveModal(item.modal);
                            }}
                            className={classNames(item.icon)}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>

            <Scheme />

            {activeModal && <Menu activeModal={activeModal} setActiveModal={setActiveModal} />}
        </>
    );
}
