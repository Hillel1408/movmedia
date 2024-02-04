import { LayoutPageModal } from "../../index";
import styles from "./ListOfVzl.module.scss";

export default function ListOfVzl() {
    return (
        <LayoutPageModal>
            <div className={styles.listOfVzl}>
                <img src="/images/normative-base/img-3.png" alt=""></img>
                <h2 className="title">Перечень ВЗЛ</h2>
                <p className="text-s">
                    Перечень ВЗЛ — часть положения о закупках <button>(Ст. 1 Закона №223-ФЗ)</button>, поэтому он утверждается вместе с принятием решения о
                    присоединении к Положению ПАО «Газпром» либо с принятием решения об утверждении своего положения о закупках (в составе этого положения).
                </p>
            </div>
        </LayoutPageModal>
    );
}
