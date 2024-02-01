import React, { useState } from "react";
import styles from "./Spoiler.module.scss";
import classNames from "classnames";

export default function Spoiler({ item }) {
    const [active, setActive] = useState(false);

    return (
        <div className={styles.spoiler}>
            <img src={item.image.url} alt="" width={item.image.width} height={item.image.height}></img>
            <h3>{item.title}</h3>
            <div className={styles.spoilerLine}></div>
            <div
                className={classNames(styles.spoilerContent, !active && styles.contentBg)}
                style={{ maxHeight: active ? "500px" : "39px" }}
                onClick={() => {
                    setActive((prev) => !prev);
                }}
            >
                <p className={classNames("text-s", "icon-chevron-right", active && styles.iconActive)}>{item.text}</p>
                <div className={styles.spoilerBlocks}>
                    {item.participants.length > 0 && (
                        <div>
                            <p className="text-medium-s">В процессе участвуют</p>
                            <ul className="text-s">
                                {item.participants.map((el, index) => (
                                    <li
                                        className={classNames(
                                            el.icon,
                                            item.participants.length % 2 !== 0 && index === item.participants.length - 1 && styles.gridColumnSpan,
                                        )}
                                        key={index}
                                    >
                                        {el.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {item.registration.length > 0 && (
                        <div>
                            <p className="text-medium-s">Нужны регистрации</p>
                            <ul className="text-s">
                                {item.registration.map((el, index) => (
                                    <li key={index}>{el}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
