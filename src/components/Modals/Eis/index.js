import React from "react";
import { LayoutPageModal, Stepper } from "../../index";
import styles from "./Eis.module.scss";
import classNames from "classnames";

export default function Eis() {
    const list = ["Положение о закупках", "Информация о закупках", "Сведения о договорах и их исполнении", "Перечень ВЗЛ", "Отчетность"];
    const steps = [
        {
            title: "Определите ответственных внутри компании.",
            list: { items: ["определите ответственных лиц для работы в ЕИС;", "примите приказ о наделении их нужными полномочиями."], dots: true },
        },
        {
            title: "Получите квалифицированную электронную подпись (КЭП) на генерального директора и ответственных лиц.",
            text: "Для этого:",
            list: {
                items: [
                    "отправьте заявку в удостоверяющий центр, аккредитованный Минкомсвязи России. Например, в Удостоверяющий центр ЭТП ГПБ;",
                    "оплатите счет;",
                    "получите подпись.",
                ],
                dots: true,
            },
        },
        {
            title: "Зарегистрируйте организацию в ЕСИА.",
            text: "Для этого:",
            list: {
                items: [
                    "зарегистрируйте руководителя организации в ЕСИА;",
                    "привяжите организацию к личному кабинету руководителя;",
                    "добавьте работников организации: они также должны быть зарегистрированы в ЕСИА.",
                ],
                dots: true,
            },
        },
        {
            title: "Создайте и настройте личный кабинет в ЕИС.",
            list: {
                items: ["зарегистрируйте организацию в ЕИС;", "зарегистрируйте работников в ЕИС и настройте их права."],
                dots: true,
            },
        },
        {
            title: "Организуйте рабочее место ответственного сотрудника для работы в ЕИС.",
            button: "Инструкция ",
            list: {
                items: [
                    "обеспечьте каждого сотрудника компьютером;",
                    "настройте интернет-браузер;",
                    "установите и настройте программное обеспечение для работы с электронной подпись.",
                ],
                dots: true,
            },
        },
    ];

    return (
        <LayoutPageModal>
            <div className={styles.eis}>
                <img src="/images/information-systems/img-8.webp" alt=""></img>
                <h2 className="title">ЕИС</h2>
                <div className={classNames(styles.eisText, "text-s")}>
                    <p>
                        Документы в открытом доступе размещаются на официальном сайте ЕИС, отдельные документы закрытого доступа размещаются в закрытой части
                        ЕИС.
                    </p>
                    <p>
                        Важно начать процесс регистрации в ЕИС параллельно с процессом разработки решения о присоединении к Положению/принятии собственного
                        Положения.
                    </p>
                </div>
                <div className={styles.eisGrid}>
                    <h3 className="subtitle">Зачем регистрироваться в ЕИС?</h3>
                    <span className="text-medium-s">В ЕИС размещается:</span>
                    <div>
                        {list.map((item, index) => (
                            <p key={index} className={classNames("text-s", "icon-polygon")}>
                                {item}
                            </p>
                        ))}
                    </div>
                    <p className="text-xs">
                        Неразмещение/несоблюдение сроков размещения влечет за собой ответственность — <button>ст. 3 № 223-ФЗ</button>,
                        <button>ст. 7 № 223-ФЗ</button>,<button>ст. 8 № 223-ФЗ</button>, а также <button>ст. 7 КоАП.</button>
                    </p>
                    <div className="text-s">
                        <p>
                            <span>Срок регистрации:</span>от 1-го до нескольких дней.
                        </p>
                        <p>
                            <span>Кто регистрирует:</span>заказчики регистрируют себя самостоятельно.
                        </p>
                    </div>
                </div>
                <div className={styles.eisStepper}>
                    <h3 className="subtitle">Как зарегистрироваться в ЕИС?</h3>
                    <div>
                        <button className="text-xs">Инструкция на официальном сайте ЕИС</button>
                    </div>
                    <Stepper image="/images/information-systems/img-9.webp" steps={steps} width="231px" height="309px" />
                </div>
            </div>
        </LayoutPageModal>
    );
}
