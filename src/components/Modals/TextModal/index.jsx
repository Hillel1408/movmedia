import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./TextModal.module.scss";
import classNames from "classnames";

export default function TextModal({ value, setActiveModal, width, color }) {
    const modalRef = useRef(null);

    return createPortal(
        <div className={styles.root} onClick={() => setActiveModal(false)}>
            <div
                ref={modalRef}
                style={{
                    left: `${value.clientX}px`,
                    top:
                        window.innerHeight - value.clientY - modalRef.current?.offsetHeight > 0
                            ? `${value.clientY}px`
                            : `${value.clientY - Math.abs(window.innerHeight - value.clientY - modalRef.current?.offsetHeight) - 30}px`,
                    width: width,
                    backgroundColor: color,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {value.title && <span>{value.title}</span>}
                {value.text && <p className="text-s">{value.text}</p>}
                {value.list && (
                    <ul className={classNames("text-s", styles.list)} style={{ paddingLeft: value.type === "numbered" && "14px" }}>
                        {value.list.map((item, index) => (
                            <li key={index} style={{ listStyleType: value.type === "numbered" && "auto" }}>
                                {typeof item === "string" ? item : item.text}
                                {item.subList && (
                                    <ul className={styles.subList}>
                                        {item.subList.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>,
        document.getElementById("portal"),
    );
}
