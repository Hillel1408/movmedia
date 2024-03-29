import { useContext, useState, useEffect } from 'react'
import classNames from 'classnames'
import {
  LayoutPageModal,
  Important,
  Button,
  Transition,
  TextModal
} from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './ListOfVzl.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function ListOfVzl() {
  const [textModal, setTextModal] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const value = useContext(ModalContext)
  const links = value.links.normativeBase.listOfVzl

  useEffect(() => {
    textModal && setActiveModal(true)
  }, [textModal])

  const list = [
    'Проанализируйте свою потребность на предмет возможности ее удовлетворения взаимозависимыми лицами.',
    'Проанализируйте своих контрагентов на предмет взаимозависимости',
    'По результатам анализа составьте перечень ВЗЛ по форме из письма от 16.06.2021 № 06/46-1809. При подготовке перечня можно ориентироваться на перечень ВЗЛ ПАО «Газпром». Он размещен в АСЭЗ. Если Вы еще не успели зарегистрироваться в АСЭЗ, то его можно запросить по адресу эл. почты 646-2-3m@adm.gazprom.ru',
    'Проверьте, что все данные в перечне актуальны: организационная форма, наименование в соответствии с кратким наименованием в ЕГРЮЛ, основания взаимозависимости, утраты статуса взаимозависимости, прекращение деятельности. Если данные неактуальны, необходимо их актуализировать.',
    'Проверьте, включаете ли вы в перечень ВЗЛ компании, которые не включены в перечень ПАО «Газпром» — включение таких ВЗЛ необходимо согласовать с ЦОУЗ.',
    'После согласования списка ВЗЛ с ЦОУЗ подготовьте Перечень для утверждения одновременно с решением о присоединении, либо решением об утверждении положения о закупках.',
    'После утверждения Перечня ВЗЛ разместите его в ЕИС — в закрытой части'
  ]
  const importantList = [
    {
      text: 'Для Компаний, в которых ПАО «Газпром» — единственный участник (акционер) — перечень утверждается ПАО «Газпром» (одновременно с принятием решения о присоединении к Положению ПАО «Газпром»). Поэтому Перечень ВЗЛ необходимо направить ПАО «Газпром» на утверждение.'
    },
    {
      text: 'Размещенный в АСЭЗ перечень проходит контроль ЦОУЗ. Если ЦОУЗ выявит ошибки, их нужно устранить в течение 2 рабочих дней.'
    }
  ]
  const importantList2 = [
    {
      text: 'Проверка оснований взаимозависимости остается на стороне Заказчика'
    },
    {
      text: 'Согласовывать нужно только организации, которые в перечне ВЗЛ ПАО «Газпром» (приложение к Положению ПАО «Газпром») отсутствуют. Если все организации в перечне уже есть в Положении ПАО «Газпром» — согласовывать такой список не нужно, его можно сразу утверждать.'
    }
  ]
  const agreementList = [
    {
      title:
        'Если в перечне есть организации, отсутствующие в Положении ПАО «Газпром»:',
      text: 'Направьте письмо о согласовании в ЦОУЗ и на почту\n646-2-3m@adm.gazprom.ru в формате Word. К письму приложите:',
      list: [
        'проект перечня в части ВЗЛ, отсутствующих в Перечне ПАО «Газпром»;',
        'если нужно, справку и документы, обосновывающие необходимость срочного принятия решения;',
        'обоснование включения юридических лиц в перечень, в т. ч. с указанием объёмов закупок за предыдущие 3 года и  планируемых к проведению.'
      ],
      icon: globalStyles.iconListAlt
    },
    {
      title:
        'Если в перечне есть организации, признанные взаимозависимыми по п. 6 ст. 105.1 НК РФ, в том числе АО «СОГАЗ»:',
      text: 'К списку документов нужно приложить копию обращения АО «СОГАЗ» о возможности признания/сохранения взаимозависимости с Компанией Группы Газпром и копию обращения Компании Группы Газпром к АО «СОГАЗ» о получении согласия на  самостоятельное признание взаимозависимости. Компания обязана обеспечить ежегодный обмен такими письмами-подтверждениями вне зависимости от того, вносятся ли изменения в перечень.',
      icon: globalStyles.iconFactCheck
    }
  ]
  const buttons = [
    {
      text: links.draftNewList.text,
      href: links.draftNewList.href
    },
    {
      text: links.draftChangesToTheList.text,
      href: links.draftChangesToTheList.href
    },
    {
      text: links.reference.text,
      href: links.reference.href
    }
  ]

  return (
    <>
      <LayoutPageModal
        clickHandler={() => value.setActiveModal('normative-base')}
      >
        <div className={styles.root}>
          <img
            src={images.peopleAtTheTable}
            alt=""
            width="282px"
            height="218px"
          ></img>
          <h2 className={globalStyles.title}>Перечень ВЗЛ</h2>
          <p className={globalStyles.textS}>
            Перечень ВЗЛ — часть положения о закупках{' '}
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
              (Ст. 1 Закона №223-ФЗ)
            </button>
            , поэтому он утверждается вместе с принятием решения о присоединении
            к Положению ПАО «Газпром» либо с принятием решения об утверждении
            своего положения о закупках (в составе этого положения).
          </p>
          <div className={styles.block}>
            <h3 className={globalStyles.subtitle}>
              Для чего формировать перечень ВЗЛ?
            </h3>
            <div>
              <h4 className={globalStyles.modalSubtitle}>Закупки у ВЗЛ</h4>
              <div className={globalStyles.textS}>
                <p>
                  <span></span>
                  не подпадают под действие Закона № 223-ФЗ, если проводятся у
                  ВЗЛ <br /> = заказчиков по Закону № 223-ФЗ, либо у иных ВЗЛ в
                  целях
                  <br />
                  обеспечения единого технологического процесса;
                </p>
                <p>
                  <span></span>осуществляются в соответствии с разделом 22
                  Положения <br /> о закупках.
                </p>
                <svg width="120" height="92" viewBox="0 0 120 92" fill="none">
                  <path
                    d="M0 46H96C108.703 46 119 35.7025 119 23V0"
                    stroke="#F48A2C"
                    strokeDasharray="2 2"
                  />
                  <path
                    d="M0 46H96C108.703 46 119 56.2975 119 69V92"
                    stroke="#F48A2C"
                    strokeDasharray="2 2"
                  />
                </svg>
              </div>
            </div>
            <Important
              color="#FFE6D0"
              list={[
                {
                  text: 'Компании Группы Газпром не могут применять перечень ВЗЛ ПАО «Газпром» для своих закупок. Исключение — случаи, когда Компания Группы Газпром выступает агентом и осуществляет закупку от имени ПАО «Газпром».'
                }
              ]}
              width="100%"
              secondaryColor="#F48A2C"
            />
          </div>
          <div className={styles.text}>
            <h3 className={globalStyles.subtitle}>
              Как сформировать Перечень ВЗЛ?
            </h3>
            <p className={globalStyles.textS}>
              В Перечень ВЗЛ Компании — заказчика могут быть включены как
              организации, которые уже включены <br /> в Перечень ПАО «Газпром»,
              так и организации, которые в нем не указаны.
            </p>
            <p className={globalStyles.textS}>
              Порядок подготовки и внесения изменений в перечни ВЗЛ для целей
              закупок определен письмом Департамента от 16.06.2021 № 06/46-1809.
            </p>
          </div>
          <div className={styles.list}>
            <h3 className={globalStyles.subtitle}>Для формирования Перечня</h3>
            <ul>
              {list.map((item, index) => (
                <li key={index} className={globalStyles.textXs}>
                  <span>{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <img src={images.folders} alt="" width="303px" height="193px"></img>
            <Important
              color="#FFE6D0"
              list={importantList}
              width="100%"
              secondaryColor="#F48A2C"
            />
          </div>
          <div className={styles.documents}>
            <h3 className={globalStyles.subtitle}>Шаблоны и документы</h3>
            <div>
              {buttons.map((item, index) => (
                <Button
                  key={index}
                  text={item.text}
                  href={item.href}
                  download
                />
              ))}
            </div>
          </div>
          <div className={styles.agreement}>
            <h3 className={globalStyles.subtitle}>
              Как согласовывать перечень ВЗЛ с ЦОУЗ?
            </h3>
            <div>
              <p>Для согласования Перечня:</p>
              <ul className={styles.agreementList}>
                {agreementList.map((item, index) => (
                  <li key={index} className={item.icon}>
                    <div>
                      <p className={globalStyles.textMediumS}>{item.title}</p>
                      <p className={globalStyles.textS}>{item.text}</p>
                      {item.list && (
                        <ul
                          className={classNames(
                            globalStyles.textS,
                            styles.agreementSublist
                          )}
                        >
                          {item.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Important
              color="#FFE6D0"
              list={importantList2}
              width="100%"
              secondaryColor="#F48A2C"
            />
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
