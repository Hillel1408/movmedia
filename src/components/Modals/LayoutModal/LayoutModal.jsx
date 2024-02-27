import { useContext } from 'react'
import { ModalContext } from '../Menu/Menu'
import styles from './LayoutModal.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

export default function LayoutModal({ children }) {
  const value = useContext(ModalContext)

  return (
    <div className={styles.root}>
      <button
        className={globalStyles.iconCancel}
        onClick={() => value.closeModal('')}
      ></button>
      {children}
    </div>
  )
}
