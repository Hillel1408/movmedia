import { useContext } from "react";
import { LayoutPageModal, GridList } from "../../index";
import { ModalContext } from "../Menu/Menu";
import styles from "./PurchaseOfGoods.module.scss";

export default function PurchaseOfGoods() {
    const value = useContext(ModalContext);

    const list = [
        { image: { url: "/images/planningElements/img-5.webp", width: "374px", height: "219px" } },
        {
            items: [
                {
                    idx: "01",
                    title: "Определите планируемый общий стоимостной объем закупок товаров. Сделать это можно по кодам и наименованиям  приложенном к Постановлению № 2013 перечне.",
                    list: [
                        "Реестр промышленной продукции, произведенной на территории государства — члена Евразийского экономического союза;",
                        "Реестр промышленной продукции, произведенной на территории Российской Федерации;",
                        "Единый реестр российской радиоэлектронной продукции.",
                    ],
                },
            ],
        },
        {
            items: [
                {
                    idx: "02",
                    title: "Рассчитайте планируемый объем закупки товаров, включенных в реестр товаров российского происхождения в размере доли, установленной для соответствующих кодов.",
                },
                {
                    idx: "03",
                    title: "Проверяйте, включены ли товары по указанным в перечне кодам в реестры на стадиях:",
                    list: [
                        "формирования потребности для включения в план закупок Группы Газпром;",
                        "подготовки к организации к проведению закупок; фактической поставки.",
                    ],
                },
            ],
        },
        { image: { url: "/images/planningElements/img-6.webp", width: "373px", height: "290px" } },
        { image: { url: "/images/planningElements/img-7.webp", width: "285px", height: "275px" } },
        {
            items: [
                {
                    idx: "04",
                    title: "Планируйте закупки квотируемых товаров с применением способов закупок, предусмотренных Положением ПАО «Газпром» ссылка на пункты Положения.",
                },
            ],
        },
    ];

    return (
        <LayoutPageModal clickHandler={() => value.setActiveModal("planning-elements")}>
            <div className={styles.root}>
                <img src="/images/planningElements/img-4.webp" alt="" width="284px" height="195px" />
                <h2 className="title">Закупки квотируемых товаров</h2>
                <p className="text-s">
                    Требования к обеспечению выполнения доли закупок квотируемых товаров российского происхождения предусмотрены Постановлением Правительства
                    Российской Федерации от 03.12.2020 № 2013 «О минимальной доле закупок товаров российского происхождения».
                </p>
                <div className={styles.grid}>
                    <h3 className="subtitle">Для организации соблюдения и контроля выполнения доли закупок квотируемых товаров:</h3>
                    <GridList gridList={list} />
                </div>
            </div>
        </LayoutPageModal>
    );
}
