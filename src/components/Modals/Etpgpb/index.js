import React from "react";
import { LayoutPageModal, Stepper } from "../../index";
import styles from "./Etpgpb.module.scss";
import classNames from "classnames";

export default function Etpgpb() {
    const list = ["Основная масса закупок в Группе Газпром проводится в электронном виде на ЭТП ГПБ.", "АСЭЗ синхронизирована с ЭТП ГПБ."];
    const steps = [
        {
            title: "Определите ответственных лиц для работы на ЭТП ГПБ.",
            text: "Это могут быть работники Закупочного подразделения, включая работника, который будет администрировать учетные записи пользователей в системе.",
        },
        {
            title: "Пройдите регистрацию на сайте ЭТП ГПБ в секции «Закупки Группы Газпром».",
            text: "Укажите общие сведения о компании и уполномоченном сотруднике.",
        },
        {
            title: "Настройте в Личном кабинете ЭТП ГПБ связь учетной записи компании с Личным кабинетом в ЕИС.",
        },
        {
            title: "Пройдите регистрацию на сайте ЭТП ГПБ в секции «Торговый портал».",
            text: "Укажите общие сведения о компании и уполномоченном сотруднике.",
        },
    ];
    const secondaryList = ["Настройте интернет-браузер.", "Установите и настройте программное обеспечение для работы с электронной подписью."];

    return (
        <LayoutPageModal>
            <div className={styles.etpgpb}>
                <img src="/images/information-systems/img-3.webp" alt=""></img>
                <h2 className="title">ЭТП ГПБ</h2>
                <p className="text-s">
                    Используется для закупок по <button>№ 223-ФЗ</button>, <button>№ 44-ФЗ</button> и коммерческих тендеров, проведения онлайн торгов и
                    аукционов, выдачи ЭЦП и банковских гарантий.
                </p>
                <div className={styles.etpgpbGrid}>
                    <h3 className="subtitle">Зачем регистрироваться на ЭТП?</h3>
                    <div>
                        {list.map((item, index) => (
                            <p key={index} className={classNames("text-s", "icon-polygon")}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.etpgpbStepper}>
                    <h3 className="subtitle">Как зарегистрироваться на ЭТП?</h3>
                    <p className="text-s">Служба поддержки ЭТП ГПБ: 8-495-276-00-51 добавочный 396. E-mail: tech@etpgpb.ru.</p>
                    <Stepper image="/images/information-systems/img-4.webp" steps={steps} />
                </div>
                <div className={styles.etpgpbSecondaryGrid}>
                    <h3 className="subtitle">Инструкция для работы на ЭТП ГПБ.</h3>
                    <div>
                        {secondaryList.map((item, index) => (
                            <p key={index} className={classNames("text-s", "icon-polygon")}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutPageModal>
    );
}
