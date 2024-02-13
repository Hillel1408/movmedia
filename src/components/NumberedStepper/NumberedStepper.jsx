import classNames from 'classnames'
import { SkewBlock } from '../index'
import styles from './NumberedStepper.module.scss'

export default function NumberedStepper({ item, idx, bgColor }) {
  return (
    <div
      className={classNames(styles.root)}
      style={{ backgroundColor: bgColor }}
    >
      <div>{bgColor !== 'transparent' && <SkewBlock color={bgColor} />}</div>
      <div>
        <span
          className="title"
          style={{ color: bgColor === '#e3f3ff' ? 'white' : '#E3F3FF' }}
        >
          0{idx + 1}
        </span>
        <p
          className="text-medium-s"
          style={{ color: bgColor === '#39A1ED' ? 'white' : '#193a54' }}
        >
          {item.title}
        </p>
      </div>
      <div>
        {item.secondaryList && (
          <ul className={classNames(styles.secondaryList, 'text-xs')}>
            {item.secondaryList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {item.text && (
          <p
            className="text-xs"
            style={{ color: bgColor === '#e3f3ff' ? '#265071' : 'white' }}
          >
            {item.text}
          </p>
        )}
        {item.list && (
          <ul
            className={classNames('text-xs', styles.list)}
            style={{
              borderLeft:
                bgColor === '#39A1ED' ? '1px solid white' : '1px solid #39a1ed',
              color: bgColor === '#39A1ED' ? 'white' : '#265071'
            }}
          >
            {item.list?.map((el, index) => (
              <li key={index}>
                <span
                  style={{
                    backgroundColor: bgColor === '#39A1ED' ? 'white' : '#39a1ed'
                  }}
                ></span>
                {el}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
