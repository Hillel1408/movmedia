import { Important } from "../index";
import styles from "./GridList.module.scss";

export default function GridList({ gridList }) {
    return (
        <div className={styles.root}>
            {gridList.map((el, index) =>
                el.image ? (
                    <img key={index} src={el.image.url} alt="" width={el.image.width} height={el.image.height} />
                ) : (
                    <div key={index} className={styles.list}>
                        {el.items.map((item, index) => (
                            <div key={index} className={styles.listItem}>
                                <h4 className="text-medium-s">{item.title}</h4>
                                {item.text && <p className="text-s">{item.text}</p>}
                                {item.list && (
                                    <ul className="text-xs">
                                        {item.list.map((listItem, index) => (
                                            <li key={index}>{listItem}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.important && <Important color="#FFE8E7" list={item.important} width="100%" secondaryColor="#F46C63" />}
                                <span className="text-medium-s">{item.idx}</span>
                            </div>
                        ))}
                    </div>
                ),
            )}
        </div>
    );
}
