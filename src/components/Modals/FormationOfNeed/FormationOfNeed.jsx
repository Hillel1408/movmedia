import { useState, useEffect, useContext } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import {
  LayoutPageModal,
  TextModal,
  HorizontalStepper,
  Important,
  GridList,
  Transition
} from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './FormationOfNeed.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function FormationOfNeed() {
  const [textModal, setTextModal] = useState('')
  const [activeModal, setActiveModal] = useState(false)

  const value = useContext(ModalContext)
  const links = value.links.planningElements.formationOfNeed

  useEffect(() => {
    textModal && setActiveModal(true)
  }, [textModal])

  const list = [
    {
      text: 'Планирование закупок в Группе Газпром осуществляется путем составления годового плана закупок Группы Газпром на календарный год, а также планов закупок заказчиков.'
    },
    {
      text: 'В состав плана закупок заказчика включается перечень закупок заказчика, включенных в годовой план закупок Группы Газпром.'
    },
    {
      text: 'План формируется на основании потребностей в заключении договоров на поставку товаров, выполнение работ, оказание услуг.'
    },
    {
      text: 'Закупки в Группе Газпром осуществляются на основании годового плана закупок Группы Газпром. ',
      link: {
        href: links.chapter2.href,
        text: links.chapter2.text
      }
    },
    {
      text: 'Договоры заключаются по результатам закупок, включенных в план закупок ',
      button: '(Ст. 3 Закона № 223-ФЗ)',
      clickHandler: e => {
        setTextModal({
          title: 'Ч. 5.1 Ст. 3 Закона № 223-ФЗ:',
          text: '5.1. Договоры на поставку товаров, выполнение работ, оказание услуг заключаются заказчиком по результатам закупок, осуществляемых в соответствии с планом закупки (если сведения о таких закупках в обязательном порядке подлежат включению в план закупки …), размещенным в единой информационной системе (если информация о таких закупках подлежит размещению в единой информационной системе …), за исключением случаев возникновения потребности в закупке вследствие аварии, иных чрезвычайных ситуаций природного или техногенного характера, непреодолимой силы, при необходимости срочного медицинского вмешательства, а также для предотвращения угрозы возникновения указанных ситуаций.',
          clientX: e.clientX,
          clientY: e.clientY
        })
      }
    }
  ]
  const stepperList = [
    {
      text: 'Ведет полный учет потребностей ',
      links: [
        {
          href: links.chapter2_2.href,
          text: links.chapter2_2.text
        }
      ]
    },
    {
      text: 'Обеспечивает своевременное согласование в порядке, определенном Заказчиком ',
      links: [
        {
          href: links.chapter2_2.href,
          text: links.chapter2_2.text
        }
      ]
    },
    {
      text: 'Обеспечивает своевременное представление потребностей для включения в годовой план закупок Группы Газпром в соответствии с установленными ЦОУЗ процедурами в АСЭЗ ',
      links: [
        {
          text: links.chapter2_2v.text,
          href: links.chapter2_2v.href
        },
        {
          text: links.chapter2_4.text,
          href: links.chapter2_4.href
        }
      ]
    }
  ]
  const importantList = [
    {
      text: 'Для заведения ППЗ по конкурентным закупкам/маркетинговым исследованиям нужно дождаться открытия периода — этим занимается Департамент. Информация о периодах размещается в АСЭЗ.'
    },
    {
      text: 'Для тех, кто только начинает ведение закупочной деятельности в соответствии с корпоративными правилами, возможно внеплановое открытие периодов. Для этого необходимо написать на адрес электронной почты: D.Zlobin@adm.gazprom.ru.'
    }
  ]
  const gridList = [
    {
      image: {
        url: images.peopleWithClouds,
        width: '297px',
        height: '262px'
      }
    },
    {
      items: [
        {
          idx: '01',
          title: 'Организуйте процесс планирования закупок',
          text: 'Организуйте процесс планирования закупок таким образом, чтобы обеспечивалось своевременное удовлетворение потребностей: с учетом бюджетных ограничений организации; в соответствии с документами-основаниями возникновения потребности (инвестиционные программы, программы капстроительства и ремонта).'
        }
      ]
    },
    {
      items: [
        {
          idx: '02',
          title: 'Сформируйте план закупок в АСЭЗ',
          text: 'Сформируйте план закупок в АСЭЗ: заведите потребности - позиции плана закупок (ППЗ).',
          important: [
            {
              text: 'Для вновь создаваемых КГГ: если план закупокуже размещен в ЕИС, то необходимо перенести закупки из такого плана в АСЭЗ и настроить интеграцию с ЕИС.'
            }
          ]
        }
      ]
    },
    {
      image: {
        url: images.foldersThree,
        width: '299px',
        height: '165px'
      }
    },
    {
      image: {
        url: images.manAtTheComputerThree,
        width: '306px',
        height: '235px'
      }
    },
    {
      items: [
        {
          idx: '03',
          title: 'Опубликуйте план закупок в ЕИС и на официальном сайте ЕИС.',
          important: [
            {
              text: 'План на следующий год нужно разместить не позднее 31 декабря текущего года. Для инновационных и высокотехнологичных товаров, работ, услуг предусмотрено формирование плана закупки на период от пяти до семи лет. ',
              button: '(Ст.4 Закона)',
              clickHandler: e => {
                setTextModal({
                  title: 'Часть 3 Ст. 4 Закона № 223-ФЗ:',
                  text: '3. План закупки инновационной продукции, высокотехнологичной продукции, лекарственных средств размещается заказчиком в единой информационной системе на период от пяти до семи лет. Правительство Российской Федерации вправе установить особенности включения закупок, предусмотренных частью 15 настоящей статьи, в план закупки инновационной продукции, высокотехнологичной продукции, лекарственных средств.',
                  clientX: e.clientX,
                  clientY: e.clientY
                })
              }
            }
          ]
        }
      ]
    }
  ]

  return (
    <>
      <LayoutPageModal
        clickHandler={() => value.setActiveModal('planning-elements')}
      >
        <div className={styles.root}>
          <img
            src={images.peopleAtTheTableTwo}
            alt=""
            width="282px"
            height="255px"
          />
          <h2 className={globalStyles.title}>
            Формирование
            <br />
            потребности плана
            <br />
            закупок
          </h2>
          <p className={globalStyles.textS}>
            Формируйте потребности в заключении договоров на закупку товаров,
            работ, услуг и включайте их в план закупок.
          </p>
          <div className={styles.grid}>
            <h3 className={globalStyles.subtitle}>
              Зачем нужно формировать потребности и включать их в план закупок?
            </h3>
            <ul>
              {list.map((item, index) => (
                <li
                  key={index}
                  className={classNames(
                    globalStyles.textS,
                    globalStyles.iconPolygon
                  )}
                >
                  <p>
                    {item.text}
                    {item.button && (
                      <button onClick={e => item.clickHandler(e)}>
                        {item.button}
                      </button>
                    )}
                    {item.link && (
                      <Link to={item.link.href} target="_blank">
                        {item.link.text}
                      </Link>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.stepper}>
            <h3 className={globalStyles.subtitle}>
              Как формировать потребность (ППЗ) для включения в план:
            </h3>
            <p className={globalStyles.textMediumS}>
              Инициатор закупки по направлению:
            </p>
            <HorizontalStepper
              list={stepperList}
              color="#F46C63"
              grid="199px 297px 1fr"
              type="secondary"
            />
            <p className={globalStyles.textS}>
              Порядок формирования и согласования потребности в КГГ должен быть
              определен локальным нормативным актом, регламентирующим процесс
              планирования.
            </p>
            <Important
              color="#FFE8E7"
              list={importantList}
              width="100%"
              secondaryColor="#F46C63"
            />
          </div>
          <div className={styles.block}>
            <h3 className={globalStyles.subtitle}>
              Как формировать план закупок?
            </h3>
            <GridList gridList={gridList} />
          </div>
        </div>
      </LayoutPageModal>

      <Transition activeModal={activeModal} cls="interactive-course-animation">
        <TextModal
          value={textModal}
          setActiveModal={setActiveModal}
          width="527px"
          color="#FFE8E7"
        />
      </Transition>
    </>
  )
}
