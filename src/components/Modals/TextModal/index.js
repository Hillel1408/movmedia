import { createPortal } from "react-dom";
import styles from "./TextModal.module.scss";

export default function TextModal({ value, setTextModal, width, color }) {
    return createPortal(
        <div className={styles.textModal} onClick={() => setTextModal("")}>
            <div style={{ left: `${value.clientX}px`, top: `${value.clientY}px`, width: width, backgroundColor: color }} onClick={(e) => e.stopPropagation()}>
                <span>{value.title}</span>
                {value.text && <p className="text-s">{value.text}</p>}
                {value.list && (
                    <ul className="text-s">
                        {value.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>,
        document.getElementById("portal"),
    );
}
