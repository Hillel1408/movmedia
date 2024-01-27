import classNames from "classnames";
import { Switcher } from "../../components";
import styles from "./Main.module.scss";

export default function Main() {
    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.headerFlex}>
                    <div>
                        <button className={classNames("icon-deployed-code-alert", "text-xs", styles.headerBtn)}>
                            Почему моей компании нужно переходить на корпоративные закупочные стандарты Группы Газпром?
                        </button>
                        <h2 className="subtitle">Что необходимо сделать для организации закупочного деятельности по единым требованиям в Группе Газпром?</h2>
                        <p className="text-s">
                            Для организации закупочного процесса в соответствии с корпоративными правилами Группы Газпром необходимо сформировать инфраструктуру
                            системы управления закупочной деятельностью и настроить работу всех ее элементов.
                        </p>
                    </div>
                    <div>
                        <div className={styles.headerSecondaryFlex}>
                            <div>
                                <p className={classNames("text-medium-xs", "icon-notification-important")}>
                                    Обратите внимание, состав мероприятий относится к заказщикам, работающим по 223-ФЗ.
                                </p>
                                <button className={classNames(styles.headerLinkBtn, "text-s", "icon-chevron-right")}>Кто к ним относится</button>
                            </div>
                            <Switcher />
                        </div>
                        <button className={classNames(styles.headerSecondaryBtn, "icon-tabs", "text-medium-s")}>
                            Перед началом обучения предлагаем ознакомиться с тем, как устроена закупочная система
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
