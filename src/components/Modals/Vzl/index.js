import { useContext } from "react";
import classNames from "classnames";
import { LayoutPageModal } from "../../index";
import { ModalContext } from "../../../components/Modals/Menu";
import styles from "./Vzl.module.scss";

export default function Vzl() {
    const value = useContext(ModalContext);

    const list = [
        "информацию о таких закупках не нужно размещать в ЕИС;",
        "информацию о договорах, заключенных по результатам таких закупок, не нужно размещать в ЕИС;",
        "не учитываются в доле закупок у СМСП: в годовом объеме закупок у СМСП и в совокупном годовом стоимостном объеме договоров;",
        "не применяются требования по доле закупок товаров российского происхождения;",
        "к таким закупки не применяются сроки оплаты, определенные в разделе 5 Положения ПАО «Газпром».",
    ];
    const gridList = [
        {
            image: { url: "/images/planningElements/img-2.webp", width: "202px", height: "168px" },
            text: "маркетинговые исследования (когда закупка осуществляется среди нескольких ВЗЛ);",
        },
        {
            image: { url: "/images/planningElements/img-3.webp", width: "203px", height: "141px" },
            text: "у единственного поставщика (подрядчика, исполнителя) – по основаниям, предусмотренным пунктом 22.13 Положения ПАО «Газпром».",
        },
    ];

    return (
        <LayoutPageModal clickHandler={() => value.setActiveModal("planning-elements")}>
            <div className={styles.root}>
                <img src="/images/planningElements/img-1.webp" alt="" width="257px" height="277px"></img>
                <h2 className="title">Закупки у ВЗЛ</h2>
                <p className="text-s">
                    Закупки у ВЗЛ включаются в план закупок на срок не менее чем 1 (один) год в соответствии с требованиями к форме такого плана, установленными
                    Департаментом. План закупок формируется с использованием АСЭЗ. <button>пункт 22.5 Положения ПАО «Газпром»</button>.
                </p>
                <div className={styles.grid}>
                    <h3 className="subtitle">Способы закупок у ВЗЛ:</h3>
                    <div>
                        {gridList.map((item, index) => (
                            <div key={index} className={styles.gridItem}>
                                <img src={item.image.url} alt="" width={item.image.width} height={item.image.height}></img>
                                <p className="text-s">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.block}>
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
