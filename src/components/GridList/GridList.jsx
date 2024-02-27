import { Important } from '../index'
import styles from './GridList.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

export default function GridList({ gridList }) {
  return (
    <div className={styles.root}>
      {gridList.map((el, index) =>
        el.image ? (
          <img
            key={index}
            src={el.image.url}
            alt=""
            width={el.image.width}
            height={el.image.height}
          />
        ) : (
          <div key={index} className={styles.list}>
            {el.items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <h4 className={globalStyles.textMediumS}>
                  {item.title}
                  {item.link && (
                    <a href={item.link.href} target="_blank" rel="noreferrer">
                      {item.link.title}
                    </a>
                  )}
                </h4>
                {item.text && <p className={globalStyles.textS}>{item.text}</p>}
                {item.list && (
                  <ul className={globalStyles.textXs}>
                    {item.list.map((listItem, index) => (
                      <li key={index}>{listItem}</li>
                    ))}
                  </ul>
                )}
                {item.important && (
                  <Important
                    color="#FFE8E7"
                    list={item.important}
                    width="100%"
                    secondaryColor="#F46C63"
                  />
                )}
                <span className={globalStyles.textMediumS}>{item.idx}</span>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}
