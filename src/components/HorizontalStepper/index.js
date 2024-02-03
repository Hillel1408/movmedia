import React from "react";
import styles from "./HorizontalStepper.module.scss";

export default function HorizontalStepper({ list, color, grid, type }) {
    return (
        <div className={styles.horizontalStepper} style={{ gridTemplateColumns: grid }}>
            {list.map((item, index) => (
                <div>
                    <div style={{ gap: type === "primary" && "8px" }}>
                        <div style={{ backgroundColor: color }}></div>
                        {index === list.length - 1 && type === "primary" ? (
                            ""
                        ) : (
                            <>
                                <div style={{ backgroundColor: color }}></div>
                                {type === "primary" && (
                                    <svg width="8" height="10" viewBox="0 0 12 14">
                                        <path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill={color} />
                                    </svg>
                                )}
                            </>
                        )}
                    </div>
                    {item.title && <span className="text-medium-s">{item.title}</span>}
                    {item.text && <p className="text-xs">{item.text}</p>}
                </div>
            ))}
        </div>
    );
}
