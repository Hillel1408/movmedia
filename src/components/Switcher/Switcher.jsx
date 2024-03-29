import classNames from 'classnames'
import styles from './Switcher.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

export default function Switcher({ activeSwitcher, setActiveSwitcher }) {
  return (
    <div
      className={classNames(styles.root, activeSwitcher && styles.active)}
      onClick={() => {
        setActiveSwitcher(prev => !prev)
      }}
    >
      <div></div>
      <span className={globalStyles.textS}>223-ФЗ</span>
    </div>
  )
}
