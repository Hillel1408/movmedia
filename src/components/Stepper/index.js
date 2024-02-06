import styles from "./Stepper.module.scss";
import classNames from "classnames";

export default function Stepper({ image, steps, width, height }) {
    return (
        <div className={classNames(styles.stepper, "block")}>
            <img src={image} alt="" width={width} height={height}></img>
            <ul>
                {steps.map((item, index) => (
                    <li key={index} className={styles.stepperItem}>
                        <span className="text-medium-s">{item.title}</span>
                        {item.text && <p className="text-s">{item.text}</p>}
                        {item.list && (
                            <ul className="text-s" style={{ paddingLeft: item.list?.dots && "15px", gap: !item.list?.dots && "8px" }}>
                                {item.list.items.map((el, index) => (
                                    <li key={index} style={{ listStyleType: item.list?.dots && "disc" }}>
                                        {!item.list?.dots && "—"} {el}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
