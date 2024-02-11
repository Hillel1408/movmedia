import styles from "./SkewBlock.module.scss";

export default function SkewBlock({ color }) {
    return (
        <div className={styles.root} style={{ backgroundColor: color }}>
            <div style={{ backgroundColor: color }}></div>
        </div>
    );
}
