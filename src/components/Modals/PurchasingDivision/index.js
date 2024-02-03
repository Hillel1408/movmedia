import classNames from "classnames";
import { LayoutPageModal, HorizontalStepper } from "../../index";
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
