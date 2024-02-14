import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LayoutModal } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './InformationSystems.module.scss'

export default function InformationSystems() {
  const value = useContext(ModalContext)

  const list = [
    {
      title: 'АСЭЗ',
      text: 'Автоматизированная система электронных\nзакупок ПАО «Газпром».',
      active: true,
      click: () => {
        value.setActiveModal('asez')
      }
    },
    {
      title: 'ЕИС',
      text: 'Единая информационная система в сфере\nзакупок товаров, работ, услуг.',
      active: value.activeSwitcher,
      click: () => {
        value.setActiveModal('eis')
      }
    },
    {
      title: 'ЭТП ГПБ',
      text: 'Электронная торговая площадка\nГазпромбанка ',
      active: true,
      click: () => {
        value.setActiveModal('etpgpb')
      },
      link: {
        href: '/library/ipoz/document#chapter1_2_50',
        text: '(п. 1.2.50 Положения).'
      }
    },
    {
      title: 'ИУС МТР',
      text: 'Информационно-управляющая система\nматериально-технических ресурсов ПАО\n«Газпром»',
      active: true,
      click: () => {
        value.setActiveModal('iusmtr')
      }
    },
    {
      title: 'ПУР АСБУ',
      text: 'Автоматизированная система бюджетного\nуправления: подсистема управления\nрасчетами.',
      active: true,
      click: () => {
        value.setActiveModal('purasbu')
      }
    }
  ]

  return (
    <LayoutModal>
      <div className={styles.root}>
        <h2 className="modal-subtitle">
          Регистрация в информационных системах
        </h2>
        <p className="text-s">
          Для работы с закупками компании нужно зарегистрироваться в нескольких
          системах:
        </p>
        <ul>
          {list.map(
            (item, index) =>
              item.active && (
                <li key={index} onClick={() => item.click()}>
                  <h3>{item.title}</h3>
                  <p className="text-xs">
                    {item.text}
                    {item.link && (
                      <Link to={item.link.href}>{item.link.text}</Link>
                    )}
                  </p>
                </li>
              )
          )}
        </ul>
      </div>
    </LayoutModal>
  )
}
