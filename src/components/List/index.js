import styles from "./List.module.scss";

export default function List({ list, color }) {
    return (
        <div className={styles.list}>
            {list.map((item, index) => (
                <div key={index}>
                    <div style={{ color: `${color}`, borderLeft: `1px solid ${color}` }}>{index + 1}</div>
                    <div>
                        <h3>{item.title}</h3>
                        {item.text && <p className="text-xs">{item.text}</p>}
                        {item.button && (
                            <button className="text-xs" onClick={(e) => item.clickHandler(e)}>
                                {item.button}
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
