import { useState, createContext } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { Overlay, ModalsSwitcn, Transition } from '../../index'
import styles from './Menu.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'
import { links } from '../../../constants/links'

export const ModalContext = createContext()

export default function Menu({ activeModal, setActiveModal, activeSwitcher }) {
  const [active, setActive] = useState(activeModal)

  const navItems = [
    {
      title: 'Создать нормативную базу',
      modal: 'normative-base',
      color: '#ffe8d5',
      borderColor: '#F48A2C',
      modals: [
        {
          title: 'Положение о закупках',
          modal: 'procurement-regulations',
          active: true
        },
        { title: 'Перечень ВЗЛ', modal: 'list-of-vzl', active: true },
        {
          title: 'Регламентные документы',
          modal: 'regulator-documents',
          active: true
        }
      ]
    },
    {
      title: 'Организовать работу в информационных системах',
      modal: 'information-systems',
      color: '#eedaff',
      borderColor: '#5545D7',
      modals: [
        { title: 'АСЭЗ', modal: 'asez', active: true },
        { title: 'ЕИС', modal: 'eis', active: activeSwitcher },
        { title: 'ЭТП ГПБ', modal: 'etpgpb', active: true },
        { title: 'ИУС МТР', modal: 'iusmtr', active: true },
        { title: 'ПУР АСБУ', modal: 'purasbu', active: true }
      ]
    },
    {
      title: 'Наладить взаимодействие участников процесса',
      modal: 'list-of-participants',
      color: '#dff2ff',
      borderColor: '#39A1ED',
      modals: [
        {
          title: 'Закупочное подразделение',
          modal: 'purchasing-division',
          active: true
        },
        {
          title: 'Закупочная комиссия',
          modal: 'purchasing-commission',
          active: true
        },
        {
          title: 'Ответственные за работу в АСЭЗ/ЕИС',
          modal: 'responsible-ASEZEIS',
          active: true
        },
        {
          title: 'Организатор закупок',
          modal: 'procurement-organizer',
          active: true
        }
      ]
    },
    {
      title:
        'Обеспечить контроль, работу с договорами, формирование отчетности',
      modal: 'working-with-contracts',
      color: '#9CC040',
      borderColor: '#9CC040',
      modals: []
    },
    {
      title: 'Настроить отдельные элементы планирования',
      modal: 'planning-elements',
      color: '#ffe0dd',
      borderColor: '#F46C63',
      modals: [
        {
          title: 'Формирование потребности',
          modal: 'formation-of-need',
          active: true
        },
        { title: 'Закупки у СМСП', modal: 'smsp', active: activeSwitcher },
        {
          title: 'Закупки квотируемых товаров',
          modal: 'purchase-of-goods',
          active: activeSwitcher
        },
        { title: 'Закупки у ВЗЛ', modal: 'vzl', active: true }
      ]
    }
  ]

  const clickHandler = str => {
    setActive('')
    setTimeout(() => {
      setActive(str)
    }, 10)
  }

  return createPortal(
    <div>
      <Overlay
        clickHandler={() => {
          setActiveModal('')
        }}
      />
      <div className={classNames(globalStyles.container, styles.container)}>
        <div
          onClick={e => e.stopPropagation()}
          className={classNames(styles.root, active && styles.active)}
          style={{
            boxShadow: !active && '-4px 4px 16px 0px rgba(25, 58, 84, 0.12)'
          }}
        >
          <ul className={styles.list}>
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  clickHandler(item.modal)
                }}
                style={{
                  outline:
                    (active === item.modal ||
                      item.modals.find(el => el.modal === active)) &&
                    `2px solid ${item.borderColor}`
                }}
              >
                <span>{item.title}</span>
                {item.modals.length > 0 && (
                  <ul
                    className={classNames(globalStyles.textS, styles.subList)}
                    style={{
                      maxHeight:
                        (active === item.modal ||
                          item.modals.find(el => el.modal === active)) &&
                        '700px'
                    }}
                  >
                    {item.modals.map(
                      (el, index) =>
                        el.active && (
                          <li
                            key={index}
                            style={{
                              outline:
                                active === el.modal &&
                                `1px solid ${item.color}`,
                              backgroundPosition:
                                active === el.modal && '99% 50%',
                              color: active === el.modal && 'white'
                            }}
                            onClick={e => {
                              e.stopPropagation()
                              el.modal && clickHandler(el.modal)
                            }}
                          >
                            {el.title}
                          </li>
                        )
                    )}
                  </ul>
                )}
                <div></div>
              </li>
            ))}
          </ul>
        </div>

        <ModalContext.Provider
          value={{
            closeModal: setActiveModal,
            setActiveModal: setActive,
            activeSwitcher,
            links
          }}
        >
          <Transition
            activeModal={Boolean(active)}
            cls="interactive-course-secondary-animation"
            timeout={600}
          >
            <>{active && <ModalsSwitcn modal={active} />}</>
          </Transition>
        </ModalContext.Provider>
      </div>
    </div>,
    document.getElementById('interactive-course-portal')
  )
}
