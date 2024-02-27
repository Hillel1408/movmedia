import { useContext } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { LayoutPageModal, NumberedStepper } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './ProcurementOrganizer.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function ProcurementOrganizer() {
  const value = useContext(ModalContext)
  const links = value.links.listOfParticipants.procurementOrganizer

  const list = [
    {
      title: 'ПАО «Газпром»',
      text: 'Чтобы ПАО «Газпром» мог выполнять функции Организатора.'
    },
    {
      title: 'АО «Газпром закупки»',
      text: 'Специализированная Компания Группы Газпром, осуществляющая функции Организатора.'
    },
    {
      title: 'ООО «Газпром комплектация»',
      text: 'Договор на организацию поставок.'
    },
    {
      title: 'ООО «Газпром комплектация»',
      text: 'Договор на оказание услуг по проведению закупок.'
    }
  ]
  const gridList = [
    {
      title: 'Для оформления Договора с ПАО «Газпром»',
      list: [
        {
          text: 'Запросите актуальную версию договора по почте: D.Listarov@adm.gazprom.ru и K.Tabulin@adm.gazprom.ru.'
        },
        { text: 'Подпишите и направьте в ПАО «Газпром».' }
      ]
    },
    {
      title: 'Для оформления Договора с АО «Газпром закупки»',
      list: [
        {
          text: 'Запросите актуальную редакцию договора по почте post@tender.gazprom.ru.'
        },
        {
          text: 'Подпишите и направьте подписанные экземпляры в АО «Газпром закупки» по одному из двух адресов:',
          sublist: [
            'г. Санкт-Петербург, Площадь Победы д. 2',
            'г. Санкт-Петербург, ул. Фурштатская д. 10, литера Б.'
          ]
        }
      ]
    }
  ]
  const stepperList = [
    {
      title:
        'Напишите письмо в произвольной форме на имя генерального директора ООО «Газпром комплектация» о необходимости заключить агентский договор. В ответ у вас запросят документы. Вот их примерный список — в письме могут запросить дополнительные документы:',
      lists: [
        {
          list: [
            {
              text: 'Заполненная анкета потенциального контрагента ',
              link: {
                text: links.questionnaire.text,
                href: links.questionnaire.href,
                download: true
              }
            },
            'Сопроводительное письмо за подписью уполномоченного лица, которым в адрес ООО «Газпром комплектация» направляется заполненная контрагентом анкета, указанные ниже документы, а также содержится подтверждение подлинности представленных документов и информации.',
            'Заверенные копии устава, свидетельства о постановке на налоговый учет и лицензий.',
            'Заверенная копия решения/протокола о назначении единоличного исполнительного органа.',
            'Заверенные копии документов, подтверждающих полномочия лица на подписание договора (протокол об избрании, доверенность).',
            'Информация о цепочке собственников, включая бенефициаров (в том числе конечных), с подтверждением соответствующими документами в электронной форме.',
            'Согласия на обработку персональных данных руководителей/учредителей всей цепочки собственников, включая конечных бенефициаров, на бумажном носителе (оригиналы) и в электронной форме.',
            'Заверенные копии внутренних организационно-распорядительных документов потенциального контрагента, регламентирующие вопросы защиты конфиденциальной информации, или письмо о том, что такие документы не утверждены.'
          ]
        }
      ]
    },
    {
      title: 'Направьте запрошенные документы на проверку',
      text: 'После проверки представленных документов ООО «Газпром комплектация» готовит и подписывает проект договора, присваивает ему регистрационный номер и дату, и направляет его на подписание.'
    },
    {
      title:
        'Подписанный экземпляр договора ООО «Газпром комплектация» нужно отправить по адресу — 196 105, г. Санкт-Петербург, Московский пр., д. 139, корп.1, стр. 1.'
    }
  ]
  const secondaryStepperList = [
    {
      title:
        'Запросите у ООО «Газпром комплектация» актуальную редакцию договора и проект соглашения о конфиденциальности по адресам:',
      text: 'Письмо нужно отправить на все 4 адреса одновременно.',
      secondaryList: [
        'nbryn@komplekt.gazprom.ru',
        'SEfremov@komplekt.gazprom.ru',
        'DSvibilskiy@komplekt.gazprom.ru',
        'IKHramtsova@komplekt.gazprom.ru'
      ]
    },
    {
      title:
        'Подпишите и направьте договор и соглашение в двух экземплярах в ООО «Газпром комплектация» — 196105, г. Санкт-Петербург, Московский пр, д.139, корп.1, стр.1 Если ранее договорная работа не велась, приложите также следующие документы:',
      lists: [
        {
          list: [
            {
              text: 'Заполненная анкета потенциального контрагента ',
              link: {
                text: links.questionnaire.text,
                href: links.questionnaire.href,
                download: true
              }
            },
            'Сопроводительное письмо за подписью уполномоченного лица, которым в адрес ООО «Газпром комплектация» направляется заполненная контрагентом анкета, указанные ниже документы, а также содержится подтверждение подлинности представленных документов и информации.',
            'Заверенные копии устава, свидетельства о постановке на налоговый учет и лицензий.',
            'Заверенная копия решения/протокола о назначении единоличного исполнительного органа.',
            'Заверенные копии документов, подтверждающих полномочия лица на подписание договора (протокол об избрании, доверенность).',
            'Информация о цепочке собственников, включая бенефициаров (в том числе конечных), с подтверждением соответствующими документами в электронной форме.',
            'Согласия на обработку персональных данных руководителей/учредителей всей цепочки собственников, включая конечных бенефициаров, на бумажном носителе (оригиналы) и в электронной форме.',
            'Заверенные копии внутренних организационно-распорядительных документов потенциального контрагента, регламентирующие вопросы защиты конфиденциальной информации, или письмо о том, что такие документы не утверждены.'
          ]
        }
      ]
    }
  ]

  return (
    <LayoutPageModal
      clickHandler={() => value.setActiveModal('list-of-participants')}
    >
      <div className={styles.root}>
        <img src={images.man} alt="" width="326px" height="280px"></img>
        <h2 className={globalStyles.title}>
          Организатор
          <br />
          закупок/
          <br />
          Централизованный
          <br />
          поставщик
        </h2>
        <div className={classNames(globalStyles.textS, styles.text)}>
          <p>
            Организатор закупки определяется на стадии планирования закупок
            заказчика Департаментом ЦОУЗ{' '}
            <Link to={links.chapter1_3_1_3.href} target="_blank">
              {links.chapter1_3_1_3.text}
            </Link>
            .
          </p>
          <p>
            Организатором закупок может быть назначен как сам заказчик, так и
            ЦОУЗ, а также Специализированная компания Группы Газпром. Также
            централизованные закупки МТР для Компании Группы Газпром может
            проводить Централизованный поставщик — ООО «Газпром комплектация».
          </p>
        </div>
        <div className={styles.block}>
          <h3 className={globalStyles.subtitle}>
            Как организовать закупки с привлечением
            Организатора/централизованного поставщика:
          </h3>
          <p className={globalStyles.textS}>
            Чтобы организовать поставки и провести закупки, нужно подписать
            агентские договоры. Всего их четыре:
          </p>
          <div>
            {list.map((item, index) => (
              <div key={index}>
                <span className={globalStyles.textMediumS}>{item.title}</span>
                <p className={globalStyles.textS}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          {gridList.map((item, index) => (
            <div key={index}>
              <h3 className={globalStyles.subtitle}>{item.title}</h3>
              <ul key={index} className={globalStyles.textS}>
                {item.list.map((item, index) => (
                  <li key={index} className={globalStyles.iconPolygon}>
                    {item.text}
                    {item.sublist && (
                      <ul className={globalStyles.textXs}>
                        {item.sublist.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.stepper}>
          <h3 className={globalStyles.subtitle}>
            Для передачи полномочий на организацию поставок <br /> ООО «Газпром
            комплектация»
          </h3>
          <div>
            {stepperList.map((item, index) => (
              <NumberedStepper
                key={index}
                item={item}
                idx={index}
                bgColor="#e3f3ff"
              />
            ))}
          </div>
        </div>
        <div className={styles.stepper}>
          <h3 className={globalStyles.subtitle}>
            Для оказания ООО «Газпром комплектация» услуг по проведению закупок:
          </h3>
          <div>
            {secondaryStepperList.map((item, index) => (
              <NumberedStepper
                key={index}
                item={item}
                idx={index}
                bgColor="#39A1ED"
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutPageModal>
  )
}
