import React from "react";
import { LayoutPageModal } from "../../index";
import styles from "./PurchaseOfGoods.module.scss";

export default function PurchaseOfGoods() {
    const gridList = [
        { image: "/images/planning-elements/img-5.webp" },
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
        { image: "/images/planning-elements/img-6.webp" },
        { image: "/images/planning-elements/img-7.webp" },
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
        <LayoutPageModal>
            <div className={styles.purchaseOfGoods}>
                <img src="/images/planning-elements/img-4.webp" alt="" />
                <h2 className="title">Закупки квотируемых товаров</h2>
                <p className="text-s">
                    Требования к обеспечению выполнения доли закупок квотируемых товаров российского происхождения предусмотрены Постановлением Правительства
                    Российской Федерации от 03.12.2020 № 2013 «О минимальной доле закупок товаров российского происхождения».
                </p>
                <div className={styles.purchaseOfGoodsGrid}>
                    <h3 className="subtitle">Для организации соблюдения и контроля выполнения доли закупок квотируемых товаров:</h3>
                    <div>
                        {gridList.map((el, index) =>
                            el.image ? (
                                <img src={el.image} alt="" />
                            ) : (
                                <div className={styles.purchaseOfGoodsGridItem}>
                                    {el.items.map((item, index) => (
                                        <div>
                                            <h4 className="text-medium-s">{item.title}</h4>
                                            <ul className="text-xs">
                                                {item.list?.map((listItem, index) => (
                                                    <li>{listItem}</li>
                                                ))}
                                            </ul>
                                            <span className="text-medium-s">{item.idx}</span>
                                        </div>
                                    ))}
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </LayoutPageModal>
    );
}
