import classNames from 'classnames'
import { SkewBlock } from '../index'
import styles from './NumberedStepper.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

export default function NumberedStepper({ item, idx, bgColor }) {
  return (
    <div
      className={classNames(styles.root)}
      style={{ backgroundColor: bgColor }}
    >
      <div>{bgColor !== 'transparent' && <SkewBlock color={bgColor} />}</div>
      <div>
        <span
          className={globalStyles.title}
          style={{ color: bgColor === '#e3f3ff' ? 'white' : '#E3F3FF' }}
        >
          0{idx + 1}
        </span>
        <p
          className={globalStyles.textMediumS}
          style={{ color: bgColor === '#39A1ED' ? 'white' : '#193a54' }}
        >
          {item.title}
        </p>
      </div>
      <div>
        {item.secondaryList && (
          <ul className={classNames(styles.secondaryList, globalStyles.textXs)}>
            {item.secondaryList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {item.text && (
          <p
            className={globalStyles.textXs}
            style={{ color: bgColor === '#e3f3ff' ? '#265071' : 'white' }}
          >
            {item.text}
          </p>
        )}
        {item.lists && (
          <div className={styles.lists}>
            {item.lists.map((item, index) => (
              <div key={index}>
                {item.title && (
                  <p className={globalStyles.textS}>{item.title}</p>
                )}
                {item.subtitle && (
                  <span className={globalStyles.textXs}>{item.subtitle}</span>
                )}
                <ul
                  className={classNames(globalStyles.textXs, styles.list)}
                  style={{
                    borderLeft:
                      bgColor === '#39A1ED'
                        ? '1px solid white'
                        : '1px solid #39a1ed',
                    color: bgColor === '#39A1ED' ? 'white' : '#265071'
                  }}
                >
                  {item.list?.map((el, index) => (
                    <li key={index}>
                      <span
                        style={{
                          backgroundColor:
                            bgColor === '#39A1ED' ? 'white' : '#39a1ed'
                        }}
                      ></span>
                      <p>
                        {typeof el === 'string' && el}
                        {el.text && el.text}
                        {el.link && (
                          <a
                            href={el.link.href}
                            download={el.link.download}
                            style={{
                              color: bgColor === '#39A1ED' ? 'white' : '#39a1ed'
                            }}
                          >
                            {el.link.text}
                          </a>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      {item.note && (
        <div className={classNames(styles.note, globalStyles.iconStar)}>
          <div>
            <span className={globalStyles.textMediumS}>{item.note.title}</span>
            {item.note.list && (
              <ul className={globalStyles.textS}>
                {item.note.list.map((item, index) => (
                  <li key={index} className="">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
