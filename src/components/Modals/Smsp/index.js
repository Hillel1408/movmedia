import classNames from "classnames";
import { LayoutPageModal, Important } from "../../index";
import styles from "./Smsp.module.scss";

export default function Smsp() {
    return (
        <LayoutPageModal>
            <div className={styles.smsp}>
                <img src="/images/planning-elements/img-12.png" alt=""></img>
                <h2 className="title">Закупки у СМСП</h2>
                <h3 className="subtitle">
                    Зачем обеспечивать выполнение требований к обеспечению доли закупок у субъектов малого и среднего предпринимательства?
                </h3>
                <p className="text-medium-s">Для организации выполнения доли закупок у СМСП:</p>
                <ul className={classNames(styles.smspList, "text-s")}>
                    <li>
                        <p>
                            Утвердите перечень товаров, работ, услуг, закупки которых вы осуществляете у субъектов малого и среднего предпринимательства (СМСП).
                        </p>
                        <ul>
                            <li>
                                <p className="icon-polygon">
                                    Проанализируйте перечень своих поставщиков на наличие в них СМСП и сведений о товарах и услугах, которые они поставляют.
                                </p>
                            </li>
                            <li>
                                <p>Изучите структуру своих закупок на предмет потенциальной необходимости осуществлять закупки у СМСП.</p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Выделите список товаров, услуг и работ, которые уже оказываются или могут быть оказаны силами СМСП с указанием кодов ОКПД 2
                                    и их прогнозной стоимостью.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Проверьте, есть ли у вас необходимость в товарах, работах и услугах, которые относятся к исключениям по пункту 7 Положения
                                    Правительства № 1352 — не включайте их в перечень.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Сформируйте перечень товаров, работ и услуг, стоимость которых не превышает 800 млн рублей. Товары, работы, услуги,
                                    включенные в перечень, возможно также закупать на общих основаниях, если цена превышает 200 млн рублей.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Сделайте расчет предполагаемой доли закупок у СМСП на основании данных о закупках прошлых лет по отношению к общему объему
                                    закупок за вычетом товаров, работ, услуг, не учитываемых в расчете в силу по п. 7 Положения № 1352.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Утвердите перечень и определите лицо, которое будет подписывать перечень электронной подписью в ЕИС от лица вашей
                                    организации.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">Сформируйте перечень в АСЭЗ.</p>
                            </li>
                            <li>
                                <p className="icon-polygon">Отправьте перечень из АСЭЗ в ЕИС.</p>
                            </li>
                            <li>
                                <p className="icon-polygon">Подпишите перечень в ЕИС.</p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Если нужно будет актуализировать перечень, делать это нужно в том же порядке: сначала в АСЭЗ, потом — в ЕИС.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Запланируйте долю закупок у субъектов малого и среднего предпринимательства (СМСП).</p>
                        <ul>
                            <li>
                                <p className="icon-polygon">Включите в проект плана закупок/утвержденный план закупок раздел об участии в закупках СМСП.</p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Для закупок, участниками которых могут быть только СМСП, предусмотрите долю не менее 20% от годового стоимостного объема
                                    планируемых закупок (рекомендуется поддерживать долю на уровне 30%). При расчете объема закупок у СМСП исключаются закупки
                                    товаров, работ, услуг по п. 7 Положения № 1352.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Определение фактической доли закупок у СМСП осуществляется по стоимостному объему оплат в отчетном периоде по договорам,
                                    заключенным с даты распространения на Общество Постановления № 1352.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">Разместите план закупки в ЕИС в течение 10 календарных дней с даты утверждения.</p>
                                <Important
                                    color="#FFE8E7"
                                    list={[
                                        {
                                            text: "Для отдельных заказчиков проект плана нужно предварительно согласовывать с Корпорацией МСП.",
                                        },
                                    ]}
                                    width="100%"
                                    secondaryColor="#F46C63"
                                />
                            </li>
                            <li>
                                <span className="text-medium-s">Как понять, что проект плана нужно согласовать?</span>
                                <p className="icon-polygon">
                                    Проекты планов закупок нужно согласовать с Корпорацией МСП либо с органами исполнительной власти субъектов РФ в случае, если
                                    ваша компания включена в перечень конкретных заказчиков, в отношении планов закупок которых проводится оценка соответствия
                                    (Распоряжение № 2258-р, Распоряжение № 717-р).
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Срок согласования проекта плана: по вновь размещенному проекту — 5 рабочих дней, по проекту изменений плана — 3 рабочих дня.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Оценка\мониторинг ведется с использованием функционала ЕИС. После размещения плана, изменений в план или годового отчета
                                    сведения уйдут на проверку.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    В ходе согласования/мониторинга проверяются объемы планируемых закупок у СМСП, соответствие раздела плана закупки у СМСП
                                    перечню соответствующих товаров, работ, услуг, а также объемы фактически проведенных закупок у СМСП и соблюдение требований
                                    к содержанию отчетов о таких закупках (ч. 5-9 ст. 5.1 Закона № 223-ФЗ).
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    По результатам оценки/мониторинга в вашем личном кабинете в ЕИС появится заключение Уполномоченного органа о соответствии
                                    либо уведомление о несоответствии плана, изменений в план или годового отчета (ч. 10 ст. 5.1 Закона № 223-ФЗ,п. 10
                                    Положения, утвержденного постановлением Правительства № 1169).
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Если вы получили уведомление о несоответствии, вы должны устранить замечания в течении 10 рабочих дней. В случае несогласия
                                    с выводами — направьте в ЕИС протокол разногласий в течение 3 рабочих дней.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Обеспечьте проведение закупок с учетом требований закупок только у СМСП.</p>
                        <ul>
                            <li>
                                <p className="icon-polygon">Разработайте закупочную документацию для проведения:</p>
                                <ul className="text-xs">
                                    <li>конкурентного отбора, предусматривающую для СМСП особые условия договора;</li>
                                    <li>конкурентного отбора с условием о привлечении СМСП на субподряд;</li>
                                    <li>маркетинговых исследований с привлечением к участию исключительно СМСП;</li>
                                </ul>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    В проекте договора, заключаемого с СМСП, вне зависимости от способа закупки следует предусматривать:
                                </p>
                                <ul className="text-xs">
                                    <li>
                                        срок оплаты поставленных товаров (выполненных работ, оказанных услуг) — не более 7 рабочих дней со дня подписания
                                        документа о приемке;
                                    </li>
                                    <li>
                                        требование к обеспечению исполнения договора, при этом размер такого обеспечения: не может превышать 5% НМЦ, если
                                        договором не предусмотрена выплата аванса;
                                    </li>
                                    <li>устанавливается в размере аванса, если договором предусмотрена выплата аванса.</li>
                                </ul>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    В документации о закупке с условием о привлечении СМСП на субподряд необходимо предусматривать обязанность участника
                                    представить план привлечение СМСП на субподряд.
                                </p>
                                <Important
                                    color="#FFE8E7"
                                    list={[
                                        {
                                            text: "Закупки, участниками которых являются любые лица, а также закупки с привлечением СМСП на субподряд, могут осуществляться любыми способами.",
                                        },
                                    ]}
                                    width="100%"
                                    secondaryColor="#F46C63"
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Обеспечьте учет годового объема закупок у СМСП</p>
                        <ul>
                            <li>
                                <p className="icon-polygon">
                                    Составьте годовой отчет о закупке у СМСП (требования к содержанию и форма годового отчета утверждены Постановлением № 1352).
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Включите в него сведения о количестве и стоимости заключенных договоров за отчетный период, а также стоимостной объем оплаты
                                    в отчетном году (с учетом объема оплаты в отчетном году договоров, срок исполнения которых превышает один календарный год, в
                                    том числе заключенных в предыдущие отчетные периоды (с даты распространения на Общество Постановления № 1352)).
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Разместите годовой отчет в ЕИС не позднее 1 февраля года, следующего за прошедшим календарным годом, подписав его в ЕИС
                                    электронной подписью уполномоченного должностного лица.
                                </p>
                            </li>
                            <li>
                                <p className="icon-polygon">
                                    Для того, чтобы закупка, участниками которой являются только СМСП, могла быть учтена в годовом отчете в составе 20%
                                    обязательной доли, должны соблюдаться следующие условия:
                                </p>
                                <ul className="text-xs">
                                    <li>товары, работы, услуги должны быть включены в перечень;</li>
                                    <li>НМЦ не превышает 800 млн руб;</li>
                                    <li>закупка включена в план закупок в ЕИС.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </LayoutPageModal>
    );
}