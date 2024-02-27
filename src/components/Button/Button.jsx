import classNames from 'classnames'
import styles from './Button.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

export default function Button({ href, text, download }) {
  return (
    <a
      href={href}
      className={classNames(
        globalStyles.iconNorthEast,
        globalStyles.textS,
        styles.root
      )}
      download={download}
    >
      {text}
    </a>
  )
}
