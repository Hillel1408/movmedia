import { LayoutPageModal, HorizontalStepper } from "../../index";
import styles from "./RegulatorDocuments.module.scss";

export default function RegulatorDocuments() {
    const gridList = [
        "Федеральный закон\n№223-ФЗ",
        "Постановление\nи положение\nПравительства РФ № 1352",
        "Постановление\nПравительства РФ №932",
        "Постановление\nПравительства РФ\n№908",
        "Постановление\nПравительства РФ\n№1169",
        "Постановление\nПравительства РФ\n№1442",
        "Распоряжение\nПравительства РФ\n№475-р",
        "Распоряжение\nПравительства РФ\n№2258-р",
        "Распоряжение\nПравительства РФ №717-р",
    ];
    const list = [
        { icon: "icon-social-distance", text: "закупочные процессы и их участники," },
        { icon: "icon-speed", text: "сроки реализации," },
        { icon: "icon-chart-data", text: "ожидаемый результат," },
        { icon: "icon-manage-history", text: "процедуры контроля результата," },
        { icon: "icon-deployed-code-account", text: "ответственность." },
    ];
    const stepperList = [
        { text: "порядок их проведения" },
        { text: "последовательность проведения и согласованность со смежными процессами" },
        { text: "задействованные структурные подразделения и условия их взаимодействия" },
    ];

    return (
        <LayoutPageModal>
            <div className={styles.regulatorDocuments}>
                <img src="/images/normative-base/img-1.webp" alt=""></img>
                <h2 className="title">
                    Регламентные
                    <br />
                    документы
                </h2>
                <div className={styles.regulatorDocumentsStepper}>
                    <h3 className="subtitle">Компания должна описать закупочные процессы:</h3>
                    <HorizontalStepper list={stepperList} color="#F48A2C" grid="225px 262px 276px" type="secondary" />
                </div>
                <div className={styles.regulatorDocumentsList}>
                    <img src="/images/normative-base/img-2.webp" width="326px" height="177px" alt=""></img>
                    <h3 className="subtitle">Руководящими документами должны быть определены</h3>
                    <ul className="text-s">
                        {list.map((item, index) => (
                            <li key={index} className={item.icon}>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.regulatorDocumentsBlock}>
                    <h3 className="subtitle">В рамках разработки Регламентных документов:</h3>
                    <div>
                        <div className="text-s">
                            <h4>Изучите регламентные документы ПАО «Газпром».</h4>
                            <p>
                                Список есть, но он постоянно обновляется. Ознакомиться можно по <button>здесь</button>. Либо направить запрос на адрес
                                электронной почты: 646-2-3m# с темой «Свод ЛНА Газпром для вновь принятой КГГ».
                            </p>
                            <span className="text-medium-s">01</span>
                        </div>
                        <div className="text-s">
                            <h4>Опишите процессы организации закупочной деятельности на всех стадиях закупки.</h4>
                            <p>
                                <button>Список рекомендованных к разработке и принятию документов</button>
                            </p>
                            <span className="text-medium-s">02</span>
                        </div>
                    </div>
                </div>
                <div className={styles.regulatorDocumentsGrid}>
                    <h3 className="subtitle">Нормативные акты, которыми в том числе необходимо руководствоваться</h3>
                    <div>
                        {gridList.map((item, index) => (
                            <div className={styles.regulatorDocumentsGridItem}>
                                <span className="text-s">{item}</span>
                                <div className="text-xs">0{index + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LayoutPageModal>
    );
}
