import { useState, useEffect, useContext } from 'react'
import {
  LayoutPageModal,
  HorizontalStepper,
  Transition,
  TextModal
} from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './RegulatorDocuments.module.scss'

export default function RegulatorDocuments() {
  const [textModal, setTextModal] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const value = useContext(ModalContext)
  const links = value.links.normativeBase.regulatorDocuments

  useEffect(() => {
    textModal && setActiveModal(true)
  }, [textModal])

  const gridList = [
    'Федеральный закон\n№223-ФЗ',
    'Постановление\nи положение\nПравительства РФ № 1352',
    'Постановление\nПравительства РФ №932',
    'Постановление\nПравительства РФ\n№908',
    'Постановление\nПравительства РФ\n№1169',
    'Постановление\nПравительства РФ\n№1442',
    'Распоряжение\nПравительства РФ\n№475-р',
    'Распоряжение\nПравительства РФ\n№2258-р',
    'Распоряжение\nПравительства РФ №717-р'
  ]
  const list = [
    {
      icon: 'icon-social-distance',
      text: 'закупочные процессы и их участники,'
    },
    { icon: 'icon-speed', text: 'сроки реализации,' },
    { icon: 'icon-chart-data', text: 'ожидаемый результат,' },
    { icon: 'icon-manage-history', text: 'процедуры контроля результата,' },
    { icon: 'icon-deployed-code-account', text: 'ответственность.' }
  ]
  const stepperList = [
    { text: 'порядок их проведения' },
    {
      text: 'последовательность проведения и согласованность со смежными процессами'
    },
    {
      text: 'задействованные структурные подразделения и условия их взаимодействия'
    }
  ]

  return (
    <>
      <LayoutPageModal
        clickHandler={() => value.setActiveModal('normative-base')}
      >
        <div className={styles.root}>
          <img
            src="/images/normativeBase/img-1.webp"
            alt=""
            width="293px"
            height="209px"
          ></img>
          <h2 className="title">
            Регламентные
            <br />
            документы
          </h2>
          <div className={styles.stepper}>
            <h3 className="subtitle">
              Компания должна описать закупочные процессы:
            </h3>
            <HorizontalStepper
              list={stepperList}
              color="#F48A2C"
              grid="225px 262px 276px"
              type="secondary"
            />
          </div>
          <div className={styles.list}>
            <img
              src="/images/normativeBase/img-2.webp"
              width="326px"
              height="177px"
              alt=""
            ></img>
            <h3 className="subtitle">
              Руководящими документами должны быть определены
            </h3>
            <ul className="text-s">
              {list.map((item, index) => (
                <li key={index} className={item.icon}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.block}>
            <h3 className="subtitle">
              В рамках разработки Регламентных документов:
            </h3>
            <div>
              <div className="text-s">
                <h4>Изучите регламентные документы ПАО «Газпром».</h4>
                <p>
                  Список есть, но он постоянно обновляется. Ознакомиться можно{' '}
                  <a
                    href={links.regulatoryDocuments.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {links.regulatoryDocuments.text}
                  </a>
                  . Либо направить запрос на адрес электронной почты:
                  646-2-3m@adm.gazprom.ru с темой «Свод ЛНА Газпром для вновь
                  принятой КГГ».
                </p>
                <span className="text-medium-s">01</span>
              </div>
              <div className="text-s">
                <h4>
                  Опишите процессы организации закупочной деятельности на всех
                  стадиях закупки.
                </h4>
                <p>
                  <button
                    onClick={e =>
                      setTextModal({
                        list: [
                          'Положение о закупочном подразделении (см. типовой функционал закупочного подразделения).',
                          {
                            text: 'Приказ:',
                            subList: [
                              'o формировании;',
                              'o об утверждении потенциальных членов закупочной комиссии (принимается после согласования перечня с ЦОУЗ);',
                              'o об утверждении порядка работы закупочной комиссии.'
                            ]
                          },
                          'Приказ о представителях Компании для работы в ЕИС с указанием соответствующих полномочий (см. типовые полномочия для работы в ЕИС – размещены на официальном сайте ЕИС по ссылке).',
                          'Регламент планирования, включая изучение рынка, анализ и обоснование НМЦ, выбор способа закупки и т.п., организации и проведения закупок.',
                          'Порядок подготовки закупочной документации, в т.ч. разработки технического задания, согласования договоров на закупку товаров, работ, услуг.',
                          'Формы закупочной документации, шаблоны документов, направляемых для обоснования закупок (см. формы ПАО «Газпром»).',
                          'Приказ об использовании электронной подписи при размещении ЕИС, в сети «Интернет» информации Заказчика о закупках.',
                          'Условия реализации мероприятий по исключению конфликта интересов и личной заинтересованности при закупках (антикоррупционный комплаенс).',
                          'Регламент взаимодействия подразделений Заказчика при размещении сведений о договорах и документах в ЕИС (для заказчиков по Закону № 223-ФЗ).',
                          'Требования к процессу приемки работ по договору в части подтверждения надлежащего качества выполненных работ (качества поставленной продукции), соответствия сроков выполнения требований и иных требований договора, а также реализации действий представителем заказчика при нарушении условий договора поставщиком.',
                          'Требования к направлению информации о ненадлежащих поставщиках (подрядчиках, исполнителях) в реестр недобросовестных поставщиков (подрядчиков, исполнителей).',
                          'Порядок согласования изменения и расторжения договоров, заполнения анкет по итогам их исполнения.',
                          'Приказ об ответственности должностных лиц Заказчика и утверждении критериев существенности нарушений.',
                          'Должностные инструкции (соответствующие полномочия в должностных инструкциях) для непрофильных работников, задействованных в закупках, работающих в АСЭЗ.',
                          'Приказ о формировании отчетности.'
                        ],
                        clientX: e.clientX,
                        clientY: e.clientY,
                        type: 'numbered'
                      })
                    }
                  >
                    Список рекомендованных к разработке и принятию документов
                  </button>
                </p>
                <span className="text-medium-s">02</span>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <h3 className="subtitle">
              Нормативные акты, которыми в том числе необходимо
              руководствоваться
            </h3>
            <div>
              {gridList.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                  <span className="text-s">{item}</span>
                  <div className="text-xs">0{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutPageModal>

      <Transition activeModal={activeModal} cls="interactive-course-animation">
        <TextModal
          value={textModal}
          setActiveModal={setActiveModal}
          width="668px"
          color="white"
        />
      </Transition>
    </>
  )
}
