import { useContext } from "react";
import { LayoutPageModal, Stepper } from "../../index";
import { ModalContext } from "../Menu";
import styles from "./Iusmtr.module.scss";
import classNames from "classnames";

export default function Iusmtr() {
    const value = useContext(ModalContext);

    const steps = [
        {
            title: "Направьте письмо в ООО «Газпром комплектация»\nо необходимости подключения к ИУС МТР в качестве Заказчика.",
            text: "Приложите договор с ДО ПАО «Газпром». Если компания — дочернее Общество ПАО «Газпром», договор прикладывать не нужно. Дальше запрос о регистрации в ООО «Газпром информ» сделает ООО «Газпром комплектация».",
        },
        {
            title: "Запросите роли работникам, которые будут работать в ИУС МТР.",
            text: "Сделать это можно одним из двух способов:",
            list: {
                items: [
                    "через систему управления учетными записями (СУУЗ);",
                    "направив письмо генеральному директору ООО «Газпром информ»(если не подключены к СУУЗ).",
                ],
                dots: true,
            },
        },
    ];
    const secondaryList = [
        { title: "Сроки обработки письма:", text: "примерно 10 рабочих дней." },
        { title: "Кто регистрирует:", text: "ООО «Газпром информ»." },
        { title: "Уточнить статус подключения:", text: "Ермаченков Станислав,\nтел. (812) 613-01-58." },
    ];

    return (
        <LayoutPageModal clickHandler={() => value.setActiveModal("information-systems")}>
            <div className={styles.root}>
                <img src="/images/informationSystems/img-5.webp" alt="" width="232px" height="220px"></img>
                <h2 className="title">ИУС МТР</h2>
                <p className="text-s">Это система, используемая централизованным поставщиком МТР для Группы Газпром.</p>
                <div className={styles.block}>
                    <h3 className="subtitle">Зачем регистрироваться в ИУС МТР?</h3>
                    <p className={classNames("icon-polygon", "text-s")}>
                        Через ИУС МТР осуществляется сбор потребности в МТР
                        <br /> централизованным поставщиком.
                    </p>
                </div>
                <div className={styles.secondaryGrid}>
                    <h3 className="subtitle">Как зарегистрироваться в ИУС МТР?</h3>
                    <div>
                        {secondaryList.map((item, index) => (
                            <p key={index} className="text-s">
                                <span>{item.title}</span>
                                {item.text}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.stepper}>
                    <h3 className="subtitle">Для регистрации в ИУС МТР</h3>
                    <Stepper image="/images/informationSystems/img-6.webp" steps={steps} width="164px" height="200px" />
                </div>
                <div className={classNames(styles.text, "text-s")}>
                    <span>Контакт техподдержки ООО «Газпром информ»:</span>
                    <p>
                        тел. (495) 719-45-88, газ. (701) 9-45-88, <br /> sap-callcentre@inform.gazprom.ru
                    </p>
                </div>
            </div>
        </LayoutPageModal>
    );
}
