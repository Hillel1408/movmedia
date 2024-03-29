import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutPageModal,
  TextModal,
  Important,
  Button,
  Transition
} from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './ProcurementRegulations.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function ProcurementRegulations() {
  const [textModal, setTextModal] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const value = useContext(ModalContext)
  const links = value.links.normativeBase.procurementRegulations

  useEffect(() => {
    textModal && setActiveModal(true)
  }, [textModal])

  const gridList = [
    { text: 'подготовить проект Решения', icon: globalStyles.iconReceiptLong },
    {
      text: 'вынести вопрос о присоединении на рассмотрение уполномоченного органа с соблюдением корпоративных процедур',
      icon: globalStyles.iconUnknownDocument
    },
    {
      text: 'разместить решение о присоединении в ЕИС на официальном сайте',
      icon: globalStyles.iconCaptivePortal,
      button: '(Ст. 2 Закона № 223-ФЗ)',
      clickHandler: e => {
        setTextModal({
          title: 'Ч. 4 ст. 2 Закона № 223-ФЗ',
          text: '4. Органы управления юридических лиц, указанных в пунктах 2 и 3 части 2 статьи 1 настоящего Федерального закона, вправе в порядке, предусмотренном гражданским законодательством, принять решение о присоединении данного юридического лица к положению о закупке, утвержденному органом управления юридического лица, указанного в пункте 1 части 2 статьи 1 настоящего Федерального закона, с учетом требований, установленных частью 3 настоящей статьи. Такое решение размещается в порядке, предусмотренном частью 1 статьи 4 настоящего Федерального закона.',
          clientX: e.clientX,
          clientY: e.clientY
        })
      }
    }
  ]
  const buttons = [
    {
      text: links.joiningGazprom.text,
      href: links.joiningGazprom.href
    },
    {
      text: links.projectVzl.text,
      href: links.projectVzl.href
    }
  ]

  return (
    <>
      <LayoutPageModal
        clickHandler={() => value.setActiveModal('normative-base')}
      >
        <div className={styles.root}>
          <img src={images.loaderTwo} alt="" width="316px" height="223px"></img>
          <h2 className={globalStyles.title}>Положение о закупках</h2>
          <div className={styles.text}>
            <h3 className={globalStyles.subtitle}>
              Присоединитесь к Положению
              <br />о закупках ПАО «Газпром».
            </h3>
            <p className={globalStyles.textS}>
              Дочерние и дочерние дочерних обществ ПАО «Газпром» должны
              присоединиться к Положению ПАО «Газпром» —
              <Link to={links.chapter1_1_4.href} target="_blank">
                {links.chapter1_1_4.text}
              </Link>
              . Иные Компании Группы Газпром должны рассмотреть вопрос
              <br />о присоединении к Положению ПАО «Газпром» и только, если
              органы, уполномоченные принять решение
              <br />о присоединении, такое решение не приняли — разработать и
              утвердить свое положение на основе Положения ПАО «Газпром» —{' '}
              <Link to={links.chapter1_1_4.href} target="_blank">
                {links.chapter1_1_4.text}
              </Link>
              .
            </p>
            <div>
              <span>Продолжительность этапа:</span>
              <p className={globalStyles.textS}>До 1-го месяца.</p>
            </div>
          </div>
          <div className={styles.grid}>
            <h3 className={globalStyles.subtitle}>
              Для присоединения к Положению ПАО «Газпром» нужно:
            </h3>
            <ul className={globalStyles.textS}>
              {gridList.map((item, index) => (
                <li key={index} className={item.icon}>
                  {item.text}
                  {item.button && (
                    <button onClick={e => item.clickHandler(e)}>
                      {item.button}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.important}>
            <h3 className={globalStyles.modalSubtitle}>Что важно помнить</h3>
            <div className={globalStyles.textS}>
              <p>
                В решении о присоединении должно быть указано на утверждение
                перечня ВЗЛ — этот перечень у каждого заказчика свой{' '}
                <button
                  onClick={e =>
                    setTextModal({
                      title: 'П. 13 ч. 4 ст. 1 Закона № 223-ФЗ:',
                      text: '13) … перечень предусмотренных настоящим пунктом юридических лиц определен правовыми актами, предусмотренными частью 1 статьи 2 настоящего Федерального закона и регламентирующими правила закупок. В таких правовых актах указывается обоснование включения в указанный перечень каждого юридического лица в соответствии с положениями Налогового кодекса Российской Федерации;',
                      clientX: e.clientX,
                      clientY: e.clientY
                    })
                  }
                >
                  (Ст. 1 Закона № 223-ФЗ)
                </button>
                . Как разработать перечень ВЗЛ —<br />
                <button
                  onClick={() => {
                    value.setActiveModal('list-of-vzl')
                  }}
                >
                  посмотрите информацию
                </button>
                .
              </p>
              <p>
                Для Компаний, для которых ПАО «Газпром» — единственный участник
                (акционер), — подготовку и утверждение решения осуществляет ПАО
                «Газпром». Вам необходимо обеспечить направление в ЦОУЗ переченя
                ВЗЛ для утверждения.
              </p>
              <p>
                Не забудьте разместить перечень ВЗЛ отдельно в ЕИС в закрытой
                части{' '}
                <button
                  onClick={e =>
                    setTextModal({
                      title: 'Ч. 1 ст. 4 Закона № 223-ФЗ',
                      text: '1. Положение о закупке, изменения, вносимые в указанное положение, подлежат обязательному размещению в единой информационной системе не позднее чем в течение пятнадцати дней со дня утверждения.',
                      clientX: e.clientX,
                      clientY: e.clientY
                    })
                  }
                >
                  (Ст. 4 Закона № 223-ФЗ)
                </button>
                , а также в АСЭЗ одновременно с размещением в ЕИС.
              </p>
              <p>
                Компании, которые присоединились к Положению ПАО «Газпром»,
                должны отслеживать изменения в Положение ПАО «Газпром» и
                обеспечивать принятие решения о присоединении к изменениям —
                срок не более 15 дней со дня размещения в ЕИС изменений в
                Положение ПАО «Газпром»{' '}
                <button
                  onClick={e =>
                    setTextModal({
                      title: 'Часть 5 ст. 2 Закона № 223-ФЗ',
                      text: '5. В случае внесения изменений в положение о закупке юридического лица, указанного в пункте 1 части 2 статьи 1 настоящего Федерального закона, размещение таких изменений в единой информационной системе в порядке, предусмотренном частью 1 статьи 4 настоящего Федерального закона, является основанием для присоединившегося юридического лица принять решение о присоединении к таким изменениям. Такое решение присоединившееся юридическое лицо принимает в течение пятнадцати дней с даты размещения юридическим лицом, указанным в пункте 1 части 2 статьи 1 настоящего Федерального закона, изменений в положение о закупке и размещает в порядке, предусмотренном частью 1 статьи 4 настоящего Федерального закона.',
                      clientX: e.clientX,
                      clientY: e.clientY
                    })
                  }
                >
                  (Ст. 2 Закона № 223-ФЗ)
                </button>
                .
              </p>
            </div>
            <Important
              color="#FFE6D0"
              list={[
                {
                  text: 'Помните, что к моменту размещения в ЕИС организация уже должна быть зарегистрирована в ЕИС. Как пройти регистрацию в ЕИС ',
                  button: 'посмотрите информацию.',
                  clickHandler: () => {
                    value.setActiveModal('eis')
                  }
                }
              ]}
              width="100%"
              secondaryColor="#F48A2C"
            />
          </div>
          <div className={styles.documents}>
            <h3 className={globalStyles.modalSubtitle}>Шаблоны и документы</h3>
            <div>
              {buttons.map((item, index) => (
                <Button key={index} text={item.text} href={item.href} />
              ))}
            </div>
            <p className={globalStyles.textS}>
              <span>
                Либо утвердите свое Положение о закупках, если решение о
                присоединении к Положению ПАО «Газпром» не принято.
              </span>
              Проект положения о закупках согласовывается с ЦОУЗ.
            </p>
          </div>
          <div className={styles.stepper}>
            <h3 className={globalStyles.modalSubtitle}>
              Для утверждения своего Положения о закупках нужно:
            </h3>
            <ul className={globalStyles.textS}>
              <li>
                <span></span>
                Разработать проект положения о закупках, соответствующий
                требованиям Положения
                <br />
                ПАО «Газпром».
              </li>
              <li>
                <span></span>Направить проект в ЦОХЗ на согласование.
              </li>
              <li>
                <span></span>
                После согласования проекта утвердить
                <br />
                положение о закупках решением
                <br />
                уполномоченного органа управления.
              </li>
              <li>
                <span></span>
                При наличии у ЦОХЗ замечаний устранить
                <br />
                их и повторно направить на согласование.
              </li>
              <li>
                <span></span>
                Разместить перечень ВЗЛ отдельно
                <br />
                от положения о закупках в ЕИС в закрытой
                <br />
                части (
                <button
                  onClick={e =>
                    setTextModal({
                      title: 'Ч. 1 ст. 4 Закона № 223-ФЗ',
                      text: '1. Положение о закупке, изменения, вносимые в указанное положение, подлежат обязательному размещению в единой информационной системе не позднее чем в течение пятнадцати дней со дня утверждения.',
                      clientX: e.clientX,
                      clientY: e.clientY
                    })
                  }
                >
                  Ст. 4 Закона
                </button>
                ,{' '}
                <a href={links.decree908.href} target="_blank" rel="noreferrer">
                  {links.decree908.text}
                </a>
                ), а также в АСЭЗ
                <br />
                одновременно с размещением в ЕИС.
              </li>
              <li>
                <span></span>
                Разместить положение о закупках в ЕИС,
                <br />
                на официальном сайте — срок в течение 15 дней
                <br />
                со дня принятия решения.
              </li>
            </ul>
            <Important
              color="#FFE6D0"
              list={[
                {
                  text: 'Помните, что к моменту размещения в ЕИС организация уже должна быть зарегистрирована в АСЭЗ. Как пройти регистрацию в АСЭЗ ',
                  button: 'посмотрите информацию.',
                  clickHandler: () => {
                    value.setActiveModal('asez')
                  }
                }
              ]}
              width="100%"
              secondaryColor="#F48A2C"
            />
          </div>
          <div className={styles.documents}>
            <h3 className={globalStyles.modalSubtitle}>Шаблоны и документы</h3>
            <div style={{ marginBottom: '0' }}>
              {buttons.map((item, index) => (
                <Button key={index} text={item.text} href={item.href} />
              ))}
            </div>
          </div>
        </div>
      </LayoutPageModal>

      <Transition activeModal={activeModal} cls="interactive-course-animation">
        <TextModal
          value={textModal}
          setActiveModal={setActiveModal}
          width="392px"
          color="#FFE6D0"
        />
      </Transition>
    </>
  )
}
