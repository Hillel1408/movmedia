import classNames from 'classnames'
import styles from './BackButton.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

export default function BackButton({ clickHandler }) {
  return (
    <button
      className={classNames(
        globalStyles.textS,
        globalStyles.iconChevronRight,
        styles.root
      )}
      onClick={() => clickHandler()}
    >
      назад
    </button>
  )
}
