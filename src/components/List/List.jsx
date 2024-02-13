import styles from './List.module.scss'

export default function List({ list, color }) {
  return (
    <ul className={styles.root}>
      {list.map(
        (item, index) =>
          item.active && (
            <li key={index} className={styles.item}>
              <div
                style={{ color: `${color}`, borderLeft: `1px solid ${color}` }}
              ></div>
              <div onClick={() => item.click()}>
                <h3>{item.title}</h3>
                {item.text && <p className="text-xs">{item.text}</p>}
                {item.button && (
                  <button
                    className="text-xs"
                    onClick={e => {
                      e.stopPropagation()
                      item.clickHandler(e)
                    }}
                  >
                    {item.button}
                  </button>
                )}
              </div>
            </li>
          )
      )}
    </ul>
  )
}
