import { useContext } from 'react'
import { ModalContext } from '../Menu/Menu'
import styles from './LayoutModal.module.scss'

export default function LayoutModal({ children }) {
  const value = useContext(ModalContext)

  return (
    <div className={styles.root}>
      <button
        className="icon-cancel"
        onClick={() => value.closeModal('')}
      ></button>
      {children}
    </div>
  )
}
