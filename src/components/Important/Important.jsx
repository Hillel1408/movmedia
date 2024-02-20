import classNames from 'classnames'
import { SkewBlock } from '../index'
import styles from './Important.module.scss'

export default function Important({ list, color, width, secondaryColor }) {
  return (
    <div
      className={styles.root}
      style={{ backgroundColor: color, maxWidth: width }}
    >
      <SkewBlock color={color} />
      <span className="text-medium-s">Важно</span>
      <ul className={classNames('text-s', styles.list)}>
        {list.map((item, index) => (
          <li key={index} style={{ borderColor: secondaryColor }}>
            <svg width="16" height="16" viewBox="0 0 12 14" fill="none">
              <path
                d="M12 7L0 13.9282L0 0.0717969L12 7Z"
                fill={secondaryColor}
              />
            </svg>
            <p>
              {item.text}
              {item.button && (
                <button
                  onClick={e => item.clickHandler && item.clickHandler(e)}
                >
                  {item.button}
                </button>
              )}
              {item.link && (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.link}
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
