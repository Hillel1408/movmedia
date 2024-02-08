import { LayoutPageModal } from "../../index";
import styles from "./ResponsibleASEZEIS.module.scss";

export default function ResponsibleASEZEIS() {
    return (
        <LayoutPageModal>
            <div className={styles.responsibleASEZEIS}>
                <img src="/images/listOfParticipants/img-1.webp" alt="" width="276px" height="256px"></img>
                <h2 className="title">
                    Ответственные
                    <br /> за работу в ЕИС
                    <br /> и АСЭЗ
                </h2>
                <h3 className="subtitle">Определите ответственных работников Закупочного подразделения за работу в ЕИС и АСЭЗ.</h3>
                <p className="text-s">
                    Для этого утвердите приказ об ответственных за работу в ЕИС и АСЭЗ с учетом прав, предоставленных для работы в ЕИС и АСЭЗ (см. блоки про
                    регистрацию Заказчика в <button>ЕИС</button> и <button>АСЭЗ</button>)
                </p>
            </div>
        </LayoutPageModal>
    );
}
