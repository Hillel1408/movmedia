import { useContext } from "react";
import classNames from "classnames";
import { LayoutPageModal, Stepper } from "../../index";
import { ModalContext } from "../../../components/Modals/Menu";
import styles from "./Asez.module.scss";

export default function Asez() {
    const value = useContext(ModalContext);

    const list = [
        { polygon: true, text: "В соответствии с едиными корпоративными правилами ВСЕ процессы и процедуры закупок реализуются в АСЭЗ." },
        {
            polygon: true,
            text: "Перечень ВЗЛ должен быть размещен в АСЭЗ и только после этого можно будет проводить закупки у ВЗЛ по разделу 22 Положения ПАО «Газпром».",
        },
        { polygon: true, text: "Посредством АСЭЗ направляются обращения в ЦОУЗ по вопросам согласования: списка потенциальных членов закупочной комиссии." },
        { polygon: true, text: "Вся документация и информация об алгоритмах реализации процедур планирования и закупочных процедур находится в АСЭЗ." },
        { title: "Срок регистрации:", text: "До 1-го месяца. Лучше начать заранее." },
        { title: "Кто регистрирует:", text: "ООО «Газпром информ»." },
    ];
    const steps = [
        {
            title: "Сделайте запрос на регистрацию",
            text: "Отправьте обращение в ООО «Газпром информ»:",
            list: { items: ["по тел. +7 (495) 719-45-88, газ. (701) 9-45-88", "по почте sap-callcentre@inform.gazprom.ru"], dots: true },
        },
        {
            title: "Определите список работников и выдайте им роли",
            text: "Определите список работников, которые будут работать в АСЭЗ, и выдайте им роли одним из двух способов:",
            list: {
                items: [
                    "через систему управления учетными записями (СУУЗ);",
                    "письмом на адрес генерального директора ООО «Газпром информ» (если не подключены к СУУЗ).",
                ],
            },
        },
        {
            title: "Получите сертификат",
            text: "Получите в ООО «Газпром информ» носитель с сертификатом.",
        },
    ];

    return (
        <LayoutPageModal clickHandler={() => value.setActiveModal("information-systems")}>
            <div className={styles.root}>
                <img src="/images/informationSystems/img-2.webp" alt="" width="282px" height="278px"></img>
                <h2 className="title">АСЭЗ</h2>
                <div className={classNames(styles.text, "text-s")}>
                    <p>
                        Это система, обеспечивающая поддержку бизнес-процессов закупочной деятельности Группы Газпром, а также выполняющая функции корпоративной
                        информационной системы в сфере закупок, взаимодействующей с единой информационной системой (п. 1.2.1 Положения).
                    </p>
                    <p>
                        Важно начать процесс регистрации в АСЭЗ параллельно с процессом разработки решения о присоединении к Положению/принятии собственного
                        Положения.
                    </p>
                </div>
                <div className={styles.grid}>
                    <h3 className="subtitle">Зачем регистрироваться в АСЭЗ?</h3>
                    <div>
                        {list.map((item, index) => (
                            <div key={index} className={classNames(styles.gridItem, "text-s", item.polygon && "icon-polygon")}>
                                <p>
                                    {item.title && <span>{item.title}</span>}
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.stepper}>
                    <h3 className="subtitle">Как зарегистрироваться в АСЭЗ?</h3>
                    <Stepper image="/images/informationSystems/img-1.webp" steps={steps} width="232px" height="328px" />
                </div>
            </div>
        </LayoutPageModal>
    );
}
