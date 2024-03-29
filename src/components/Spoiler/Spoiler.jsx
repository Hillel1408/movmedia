import { useState } from 'react'
import classNames from 'classnames'
import styles from './Spoiler.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

export default function Spoiler({ item }) {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.root}>
      <div>
        <img
          src={item.image.url}
          alt=""
          width={item.image.width}
          height={item.image.height}
        ></img>
      </div>
      <h3>{item.title}</h3>
      <div className={styles.line}></div>
      <div
        className={classNames(styles.content, !active && styles.contentBg)}
        style={{ maxHeight: active ? '500px' : '39px' }}
        onClick={() => {
          setActive(prev => !prev)
        }}
      >
        <p
          className={classNames(
            globalStyles.textS,
            globalStyles.iconChevronRight,
            active && styles.iconActive
          )}
        >
          {item.text}
        </p>
        <div className={styles.blocks}>
          {item.participants.length > 0 && (
            <div>
              <p className={globalStyles.textMediumS}>В процессе участвуют</p>
              <ul className={globalStyles.textS}>
                {item.participants.map((el, index) => (
                  <li
                    className={classNames(
                      el.icon,
                      item.participants.length % 2 !== 0 &&
                        index === item.participants.length - 1 &&
                        styles.gridColumnSpan
                    )}
                    key={index}
                  >
                    {el.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.registration.length > 0 && (
            <div>
              <p className={globalStyles.textMediumS}>Нужны регистрации</p>
              <ul className={globalStyles.textS}>
                {item.registration.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
