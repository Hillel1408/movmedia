import styles from './Overlay.module.scss'

export default function Overlay({ clickHandler }) {
  return (
    <div
      className={styles.root}
      onClick={() => {
        clickHandler()
      }}
    ></div>
  )
}
