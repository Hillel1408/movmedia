import { useContext } from 'react'
import { LayoutModal, List } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './PlanningElements.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

export default function PlanningElements() {
  const value = useContext(ModalContext)

  const list = [
    {
      title: 'Формирование потребностей и плана закупок',
      active: true,
      click: () => {
        value.setActiveModal('formation-of-need')
      }
    },
    {
      title: 'Закупки у СМСП',
      active: value.activeSwitcher,
      click: () => {
        value.setActiveModal('smsp')
      }
    },
    {
      title: 'Закупки у квотируемых товаров',
      active: value.activeSwitcher,
      click: () => {
        value.setActiveModal('purchase-of-goods')
      }
    },
    {
      title: 'Закупки у ВЗЛ',
      active: true,
      click: () => {
        value.setActiveModal('vzl')
      }
    }
  ]

  return (
    <LayoutModal>
      <div className={styles.root}>
        <h2 className={globalStyles.modalSubtitle}>Элементы планирования</h2>
      </div>
      <List list={list} color="#F46C63" />
    </LayoutModal>
  )
}
