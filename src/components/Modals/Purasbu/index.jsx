import { useContext } from "react";
import { LayoutPageModal, Stepper, HorizontalStepper } from "../../index";
import { ModalContext } from "../Menu";
import styles from "./Purasbu.module.scss";
import classNames from "classnames";

export default function Purasbu() {
    const value = useContext(ModalContext);

    const list = ["Через ПУР АСБУ в ЕИС передается информация о договорах и их исполнении.", "Оплата по договорам осуществляется через ПУР АСБУ."];
    const steps = [
        { title: "Определите ответственных внутри компании." },
        { title: "Направьте письмо в ЦОУЗ о подключении к ПУР АСБУ." },
        { title: "Направьте обращение в ООО «Газпром информ» — sap-callcentre@inform.gazprom.ru. К нему приложите данные об организации и выписку из ЕГРЮЛ." },
        {
            title: "Определите список работников, которые будут работать в АСБУ и запросите им роли.",
            text: "Определите список работников, которые будут работать в АСЭЗ, и выдайте им роли одним из двух способов:",
            list: {
                items: [
                    "через систему управления учетными записями (СУУЗ);",
                    "письмом на адрес генерального директора ООО «Газпром информ» (если не подключены к СУУЗ).",
                ],
            },
        },
        {
            title: "Получите в ООО «Газпром информ» носитель с сертификатом. Если вы уже получили носитель при регистрации в АСЭЗ, сертификат АСБУ можно тоже записать на него.",
        },
    ];
    const horizontalStepperList = [
        { title: "Транзакция SBWP" },
        { title: "Общие папки" },
        { title: "АСБУ ПУР:", text: "Операционные\nинструкции ПУР АСБУ" },
        { title: "01:", text: "Функции кураторов" },
    ];

    return (
        <LayoutPageModal clickHandler={() => value.setActiveModal("information-systems")}>
            <div className={styles.root}>
                <img src="/images/informationSystems/img-7.webp" alt="" width="276px" height="213px"></img>
                <h2 className="title">ПУР АСБУ</h2>
                <p className="text-s">Эта система, в которую подгружается информация о договорах и их исполнении.</p>
                <div className={styles.grid}>
                    <h3 className="subtitle">Зачем регистрироваться на ЭТП?</h3>
                    <div>
                        {list.map((item, index) => (
                            <p key={index} className={classNames("text-s", "icon-polygon")}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles.stepper}>
                    <h3 className="subtitle">Как зарегистрироваться в ПУР АСБУ?</h3>
                    <div className={classNames("text-s", styles.text)}>
                        <p>
                            <span>Срок регистрации:</span>1 месяц.
                        </p>
                        <p>
                            <span>Кто регистрирует:</span>ООО «Газпром информ».
                        </p>
                    </div>
                    <Stepper image="/images/informationSystems/img-10.webp" steps={steps} width="215px" height="186px" />
                </div>
                <div className={styles.instructions}>
                    <h3 className={classNames("subtitle", "icon-developer-guide")}>Инструкции пользователей: в АСБУ.</h3>
                    <HorizontalStepper list={horizontalStepperList} color="#5545D7" grid="179px 165px 261px 111px" type="primary" />
                </div>
            </div>
        </LayoutPageModal>
    );
}
