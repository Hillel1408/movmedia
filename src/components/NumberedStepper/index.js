import classNames from "classnames";
import styles from "./NumberedStepper.module.scss";

export default function NumberedStepper({ item, idx, bgColor }) {
    return (
        <div className={classNames(styles.numberedStepper, "block")} style={{ backgroundColor: bgColor }}>
            <div>
                <span className="title">0{idx + 1}</span>
                <p className="text-medium-s" style={{ color: bgColor === "#e3f3ff" ? "#193a54" : "white" }}>
                    {item.title}
                </p>
            </div>
            <div>
                {item.secondaryList && (
                    <ul className={classNames(styles.numberedStepperSecondaryList, "text-xs")}>
                        {item.secondaryList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
                {item.text && (
                    <p className="text-xs" style={{ color: bgColor === "#e3f3ff" ? "#265071" : "white" }}>
                        {item.text}
                    </p>
                )}
                <ul
                    className={classNames("text-xs", styles.numberedStepperList)}
                    style={{ borderLeft: bgColor === "#e3f3ff" ? "1px solid #39a1ed" : "1px solid white", color: bgColor === "#e3f3ff" ? "#265071" : "white" }}
                >
                    {item.list?.map((el, index) => (
                        <li>
                            <span style={{ backgroundColor: bgColor === "#e3f3ff" ? "#39a1ed" : "white" }}></span>
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
