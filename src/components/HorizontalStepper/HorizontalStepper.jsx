import { Link } from 'react-router-dom'
import styles from './HorizontalStepper.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

export default function HorizontalStepper({ list, color, grid, type }) {
  return (
    <div
      className={styles.root}
      style={{ gridTemplateColumns: grid, gap: type === 'primary' && '8px' }}
    >
      {list.map((item, index) => (
        <div key={index} className={styles.grid}>
          <div
            className={styles.gridItem}
            style={{ gap: type === 'primary' && '8px' }}
          >
            <div style={{ backgroundColor: color }}></div>
            {index === list.length - 1 && type === 'primary' ? (
              ''
            ) : (
              <>
                <div style={{ backgroundColor: color }}></div>
                {type === 'primary' && (
                  <svg width="8" height="10" viewBox="0 0 12 14">
                    <path d="M12 7L0 13.9282L0 0.0717969L12 7Z" fill={color} />
                  </svg>
                )}
              </>
            )}
          </div>
          {item.title && (
            <span className={globalStyles.textMediumS}>{item.title}</span>
          )}
          {item.text && (
            <p className={globalStyles.textXs}>
              {item.text}
              {item.links &&
                item.links.map((item, index) => (
                  <Link key={index} to={item.href} target="_blank">
                    {item.text}
                  </Link>
                ))}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
