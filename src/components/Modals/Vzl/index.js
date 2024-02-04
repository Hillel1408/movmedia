import classNames from "classnames";
import { LayoutPageModal, TextModal } from "../../index";
import styles from "./Vzl.module.scss";

export default function Vzl() {
    const list = [
        "информацию о таких закупках не нужно размещать в ЕИС;",
        "информацию о договорах, заключенных по результатам таких закупок, не нужно размещать в ЕИС;",
        "не учитываются в доле закупок у СМСП: в годовом объеме закупок у СМСП и в совокупном годовом стоимостном объеме договоров;",
        "не применяются требования по доле закупок товаров российского происхождения;",
        "к таким закупки не применяются сроки оплаты, определенные в разделе 5 Положения ПАО «Газпром».",
    ];
    const gridList = [
        { image: "/images/planning-elements/img-2.webp", text: "маркетинговые исследования (когда закупка осуществляется среди нескольких ВЗЛ);" },
        {
            image: "/images/planning-elements/img-3.webp",
            text: "у единственного поставщика (подрядчика, исполнителя) – по основаниям, предусмотренным пунктом 22.13 Положения ПАО «Газпром».",
        },
    ];

    return (
        <LayoutPageModal>
            <div className={styles.vzl}>
                <img src="/images/planning-elements/img-1.webp" alt=""></img>
                <h2 className="title">Закупки у ВЗЛ</h2>
                <p className="text-s">
                    Закупки у ВЗЛ включаются в план закупок на срок не менее чем 1 (один) год в соответствии с требованиями к форме такого плана, установленными
                    Департаментом. План закупок формируется с использованием АСЭЗ. <button>пункт 22.5 Положения ПАО «Газпром»</button>.
                </p>
                <div className={styles.vzlGrid}>
                    <h3 className="subtitle">Способы закупок у ВЗЛ:</h3>
                    <div>
                        {gridList.map((item, index) => (
                            <div key={index} className={styles.vzlGridItem}>
                                <img src={item.image} alt=""></img>
                                <p className="text-s">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.vzlBlock}>
                    <h3 className="subtitle">Особенности закупок у ВЗЛ, осуществленных по разделу 22 Положения ПАО «Газпром»:</h3>
                    <div>
                        {list.map((item, index) => (
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
