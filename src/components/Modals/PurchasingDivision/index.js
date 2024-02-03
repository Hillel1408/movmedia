import classNames from "classnames";
import { LayoutPageModal, HorizontalStepper, Important } from "../../index";
import styles from "./PurchasingDivision.module.scss";

export default function PurchasingDivision() {
    const stepperList = [
        { text: "Материалы методической поддержки" },
        { text: "Методические материалы" },
        { text: "Нормативные и регламентные документы ПАО «Газпром»  материалы" },
        { text: "Контроль закупочной деятельности" },
    ];
    const gridList = [
        { icon: "icon-file-copy", text: "Подготовьте пакет необходимых документов в соответствии с письмом от 09.07.2019 № 06/46-395" },
        { icon: "icon-folder-supervised", text: "Направьте кандидатуру на согласование в ЦОУЗ" },
        { icon: "icon-person-pin", text: "После согласования выполните процедуры по оформлению кандидата на работу" },
    ];
    const importantList = [{ text: "Кандидатура руководителя закупочного подразделения должна быть одобрена ЦОУЗ." }];
    const secondaryStepperList = [
        { text: "Сформировать подразделение" },
        { text: "Назначить его руководителя" },
        { text: "Организовать рабочее место каждого сотрудника" },
    ];
    const list = [
        { title: "Определите функционал закупочного подразделения.", text: "(см. типовой функционал закупочного подразделения)" },
        {
            title: "Рассчитайте численность закупочного подразделения.",
            important: [
                {
                    text: "Для дочерних обществ ПАО «Газпром» численность должна быть подтверждена ПАО «Газпром», в том числе согласована с ЦОУЗ (письмо о порядке согласования численности).",
                },
            ],
        },
        { title: "Разработайте положение о закупочном подразделении." },
    ];

    return (
        <LayoutPageModal>
            <div className={styles.purchasingDivision}>
                <img src="/images/list-of-participants/img-3.png" alt=""></img>
                <h2 className="title">
                    Сформируйте
                    <br />
                    Закупочное
                    <br />
                    подразделение
                </h2>
                <div className={styles.purchasingDivisionBlock}>
                    <h3 className="subtitle">Для чего нужно формировать закупочное подразделение?</h3>
                    <p className="text-s">
                        Для организации закупочной деятельности должно быть сформировано подразделение по подготовке и проведению закупок либо определено лицо,
                        ответственное за организацию и проведение закупок, если объем закупок незначителен <button>(Положение)</button>.
                    </p>
                </div>
                <div className={styles.purchasingDivisionStepper}>
                    <h3 className="subtitle">Для организации закупочной деятельности нужно:</h3>
                    <HorizontalStepper list={secondaryStepperList} color="#39A1ED" grid="291px 291px 1fr" type="secondary" />
                    <Important color="#e3f3ff" list={importantList} width="538px" secondaryColor="#39A1ED" />
                </div>
                <div className={styles.purchasingDivisionList}>
                    <h3 className="subtitle">Как сформировать закупочное подразделение?</h3>
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>
                                <span className="title">0{index + 1}</span>
                                <div>
                                    <span className="text-medium-s">{item.title}</span>
                                    {item.text && <p className="text-s">{item.text}</p>}
                                    {item.important && <Important color="#e3f3ff" list={item.important} width="100%" secondaryColor="#39A1ED" />}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.purchasingDivisionGrid}>
                    <h3 className="subtitle">
                        Как согласовать кандидатуру руководителя подразделения или специалиста, ответственного за обеспечение закупочной деятельности?
                    </h3>
                    <p className="text-s">
                        <span>Срок согласования:</span>не более 1-го месяца.
                    </p>
                    <div className={styles.purchasingDivisionGridList}>
                        {gridList.map((item, index) => (
                            <p key={index} className={classNames("text-medium-s", item.icon)}>
                                {item.text}
                            </p>
                        ))}
                    </div>
                    <p className="text-s">Письмо размещено в АСЭЗ:</p>
                    <HorizontalStepper list={stepperList} color="#39A1ED" grid="173px 148px 215px 1fr" type="primary" />
                </div>
            </div>
        </LayoutPageModal>
    );
}
