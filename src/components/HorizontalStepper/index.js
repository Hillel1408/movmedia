import React from "react";
import styles from "./HorizontalStepper.module.scss";
import classNames from "classnames";

export default function HorizontalStepper({ list, color }) {
    return (
        <div className={styles.horizontalStepper}>
            {list.map((item, index) => (
                <div>
                    <div>
                        <div style={{ backgroundColor: color }}></div>
                        {index !== list.length - 1 && (
                            <>
                                <div style={{ backgroundColor: color }}></div>
                                <svg width="8" height="10" viewBox="0 0 12 14">
                                    <path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill={color} />
                                </svg>
                            </>
                        )}
                    </div>
                    <span className="text-medium-s">{item.title}</span>
                    {item.text && <p className="text-xs">{item.text}</p>}
                </div>
            ))}
        </div>
    );
}
