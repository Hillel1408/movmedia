import styles from "./Stepper.module.scss";
import { SkewBlock } from "../index";
import classNames from "classnames";

export default function Stepper({ image, steps, width, height }) {
    return (
        <div className={classNames(styles.root)}>
            <SkewBlock color="#F3F1FF" />
            <img src={image} alt="" width={width} height={height}></img>
            <ul>
                {steps.map((item, index) => (
                    <li key={index} className={styles.item}>
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
