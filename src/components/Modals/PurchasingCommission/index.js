import { LayoutPageModal, Important } from "../../index";
import styles from "./PurchasingCommission.module.scss";

export default function PurchasingCommission() {
    const importantList = [
        {
            text: "Состав потенциальных членов закупочной комиссии должен быть согласован с ЦОУЗ. Ознакомиться с порядком согласования Вы можете ",
            button: "здесь.",
        },
    ];

    return (
        <LayoutPageModal>
            <div className={styles.purchasingCommission}>
                <img src="/images/list-of-participants/img-4.png" alt=""></img>
                <h2 className="title">
                    Сформируйте
                    <br />
                    Закупочную
                    <br />
                    комиссию
                </h2>
                <p className="text-s">
                    Закупочная комиссия формируется Организатором из числа лиц, включенных в состав потенциальных членов закупочной комиссии, утвержденный
                    генеральным директором <button>(п. 1.4.2 Положения)</button>.
                </p>
                <Important color="#e3f3ff" list={importantList} width="100%" secondaryColor="#39A1ED" />
            </div>
        </LayoutPageModal>
    );
}
