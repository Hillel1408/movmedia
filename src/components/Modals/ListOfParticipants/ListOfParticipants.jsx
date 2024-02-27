import { useContext } from 'react'
import { LayoutModal, List } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './ListOfParticipants.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

export default function ListOfParticipants() {
  const value = useContext(ModalContext)

  const list = [
    {
      title: 'Закупочное подразделение',
      active: true,
      click: () => {
        value.setActiveModal('purchasing-division')
      }
    },
    {
      title: 'Закупочная комиссия',
      active: true,
      click: () => {
        value.setActiveModal('purchasing-commission')
      }
    },
    {
      title: 'Ответственные за работу в ЕИС и АСЭЗ',
      active: true,
      click: () => {
        value.setActiveModal('responsible-ASEZEIS')
      }
    },
    {
      title: 'Организатор закупок',
      active: true,
      click: () => {
        value.setActiveModal('procurement-organizer')
      }
    }
  ]
  return (
    <LayoutModal>
      <div className={styles.root}>
        <h2 className={globalStyles.modalSubtitle}>Состав участников</h2>
      </div>
      <List list={list} color="#39A1ED" />
    </LayoutModal>
  )
}
