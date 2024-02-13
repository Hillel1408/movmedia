import { useState, useEffect, useContext } from 'react'
import { LayoutModal, List, TextModal, Transition } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './NormativeBase.module.scss'

export default function NormativeBase() {
  const [textModal, setTextModal] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const value = useContext(ModalContext)

  useEffect(() => {
    textModal && setActiveModal(true)
  }, [textModal])

  const list = [
    {
      title: 'Положение о закупках',
      text: 'Утверждается уполномоченным\nорганом управления организации',
      button: '(Ст.2 №223-ФЗ).',
      active: true,
      clickHandler: e => {
        setTextModal({
          title: 'Ч. 3 ст. 2 Закона № 223-ФЗ',
          list: [
            '3. Положение о закупке утверждается:',
            '4) советом директоров (наблюдательным советом) хозяйственного общества в случае, если заказчиком выступает акционерное общество, либо в случае, когда уставом акционерного общества предусмотрено осуществление функций совета директоров (наблюдательного совета) общим собранием акционеров общества, коллегиальным исполнительным органом общества или при отсутствии коллегиального исполнительного органа общим собранием акционеров общества;',
            '5) общим собранием участников общества с ограниченной ответственностью в случае, если заказчиком выступает общество с ограниченной ответственностью, либо в случае, когда утверждение положения о закупке отнесено уставом общества с ограниченной ответственностью к компетенции совета директоров (наблюдательного совета) общества или коллегиального исполнительного органа общества, советом директоров (наблюдательным советом) общества или коллегиальным исполнительным органом общества;'
          ],
          clientX: e.clientX,
          clientY: e.clientY
        })
      },
      click: () => {
        value.setActiveModal('procurement-regulations')
      }
    },
    {
      title: 'Перечень ВЗЛ',
      text: 'Перечень взаимозависимых с заказчиком лиц (ВЗЛ)\nдля целей применения положения о закупках является\nнеотъемлемой частью Положения о закупках',
      button: '(Ст.1 №223-ФЗ).',
      active: true,
      clickHandler: e => {
        setTextModal({
          title: 'п. 13 ч. 4 ст.1 Закон 223-ФЗ',
          text: '…перечень предусмотренных настоящим пунктом юридических лиц определен правовыми актами, предусмотренными частью 1 статьи 2 настоящего Федерального закона и регламентирующими правила закупок. В таких правовых актах указывается обоснование включения в указанный перечень каждого юридического лица в соответствии с положениями Налогового кодекса Российской Федерации;',
          clientX: e.clientX,
          clientY: e.clientY
        })
      },
      click: () => {
        value.setActiveModal('list-of-vzl')
      }
    },
    {
      title: 'Регламентные документы',
      text: 'Регламентные документы в сфере закупок\n(оформляются приказом, инструкцией\n(регламентом).',
      active: true,
      click: () => {
        value.setActiveModal('regulator-documents')
      }
    }
  ]

  return (
    <>
      <LayoutModal>
        <div className={styles.root}>
          <h2 className="modal-subtitle">
            Для перехода на систему управления закупочной деятельностью в
            соответствии с корпоративными правилами Группы Газпром компания
            должна создать нормативную базу:
          </h2>
          <List list={list} color="#F48A2C" />
        </div>
      </LayoutModal>

      <Transition activeModal={activeModal} cls="interactive-course-animation">
        <TextModal
          value={textModal}
          setActiveModal={setActiveModal}
          width="527px"
          color="#FFE6D0"
        />
      </Transition>
    </>
  )
}
