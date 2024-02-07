import React from "react";
import { LayoutPageModal } from "../../index";
import styles from "./WorkingWithContracts.module.scss";

export default function WorkingWithContracts() {
    const list = [
        {
            text: "Утвердите локальный документ, определяющий порядок взаимодействия подразделений по формированию и направлению отчетности о закупках. После подключения к АСЭЗ и ПУР АСБУ формируйте ежеквартальную отчетность о закупочной деятельности с использованием АСЭЗ, которая использует данные ПУР АСБУ (только для тех Компаний Группы Газпром, которым направлены соответствующие письма ЦОУЗ).",
        },
        {
            text: "Утвердите распорядительный документ о назначении ответственных лиц из числа подразделений-инициаторов закупок, закупочного подразделения по каждому бизнес- процессу закупочной деятельности, а также о мерах персональной ответственности, подлежащих применению к таким лицам за соответствующие недостатки и нарушения.",
        },
        {
            text: "Если организация будет выступать заказчиком от имени ПАО «Газпром» — ознакомиться с требованиями ПАО «Газпром» по учету сведений о договорах:",
            sublist: [
                "Инструкция по учету информации о договорах на поставку товаров, выполнение работ, оказание услуг в единой базе договоров подсистемы управления расчетами автоматизированной системы бюджетного управления ПАО «Газпром», утв. Начальником Департамента ПАО «Газпром» Н. В. Чекалиной от 27.08.2021 № 46.06.3031, размещена в разделе «Учет договоров в ПУР АСБУ» на Интранет-сайте ЦОУЗ, при отсутствии доступа может быть направлена по электронной почте по запросу на MAO@adm.gazprom.ru).",
            ],
        },
        {
            text: "Ознакомиться с порядком согласования доп. соглашений, заполнения анкет. Обеспечить соблюдение сроков заключения договоров и оплаты по ним, ведения реестра договоров и размещения информации в единой информационной системе.",
        },
        { text: "Ознакомиться с критериями существенности нарушений и реализовать механизм привлечения к ответственности за нарушения." },
        { text: "Организовать контроль соблюдении требований о применении Единого реестра МТР, допущенных к применению на объектах ПАО «Газпром»." },
    ];

    return (
        <LayoutPageModal>
            <div className={styles.workingWithContracts}>
                <img src="/images/workingWithContracts/img-1.webp" alt=""></img>
                <h2 className="title">Работа с договорами. Отчетность. Контроль.</h2>
                <h3 className="subtitle">С какими документами нужно работать:</h3>
                <ul className="block">
                    {list.map((item, index) => (
                        <li key={index}>
                            <span className="subtitle">0{index + 1}</span>
                            <p className="text-s">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </LayoutPageModal>
    );
}
