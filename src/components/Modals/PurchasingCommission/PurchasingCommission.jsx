import { useContext } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { LayoutPageModal, Important, NumberedStepper } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './PurchasingCommission.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function PurchasingCommission() {
  const value = useContext(ModalContext)
  const links = value.links.listOfParticipants.purchasingCommission

  const importantList = [
    {
      text: 'Состав потенциальных членов закупочной комиссии должен быть согласован с ЦОУЗ. Ознакомиться с порядком согласования Вы можете ',
      link: links.approvalProcedure.text,
      href: links.approvalProcedure.href
    }
  ]
  const list = [
    'Лица, заинтересованные в результатах закупки: подавшие заявку на участие в закупке или работающие в такой компании.',
    'Лица-участники или акционеры в компаниях, подавших заявку на участие в закупке. К этому списку относятся члены владения таких компаний, их кредиторы или дебиторы, а также члены их семей.',
    'Родственники или супруги руководителя компании, участвующей в закупке.'
  ]
  const secondaryList = [
    { count: 2, text: 'представителя службы корпоративной защиты' },
    { count: 1, text: 'представитель\nфинансовой службы' },
    { count: 2, text: 'представителя закупочного подразделения' },
    {
      count: 3,
      text: 'года, стаж работы членов закупочной комиссии\nпо их специальности'
    }
  ]
  const stepperList = [
    {
      title:
        'Отправьте обращение о согласовании потенциальных членов закупочной комиссии через АСЭЗ. Сделать это можно с 15 по 30 число последнего месяца каждого квартала*. Срок рассмотрения обращения — 20 дней.',
      lists: [
        {
          title: 'К обращению приложите документы:',
          subtitle: 'Для создания нового списка',
          list: [
            'Согласие будущих членов закупочной комиссии на обработку персональных данных',
            'Сведения о членах закупочной комиссии',
            'Иные документы, которые вы считаете нужным отправить.'
          ]
        },
        {
          subtitle: 'Для изменения существующего списка:',
          list: [
            'Ранее согласованный Департаментом список потенциальных членов закупочной комиссии с приложением распорядительного документа.',
            'Заполненная таблица со сведениями о новых членах комиссии',
            'Заполненная таблица со сведениями о членах комиссии, которых вы хотите удалить из списка.',
            'Если у членов комиссии изменилась информация в пунктах 4, 7, 8, 10 ранее согласованной таблицы, напишите об изменениях на M.Sobolevskaya@adm.gazprom.ru и T.Davydova@adm.gazprom.ru. Сделать это нужно в течение 5 дней.',
            'Согласие будущих членов закупочной комиссии на обработку персональных данных. Изменения вносятся в АСЭЗ Компанией самостоятельно',
            'Иные документы, которые вы считаете нужным отправить'
          ]
        }
      ],
      note: {
        title:
          'Для вновь созданных Компаний Группы Газпром может открываться прием обращений вне очереди. Обратитесь в отдел 646/2/1:',
        list: [
          'Давыдова Татьяна Витальевна (812) 609-30-28, газ. тел.: (700) 4-30-28',
          'Соболевская Мария Николаевна, (812) 609-30-74, газ. тел.: (700) 4-30-74.'
        ]
      }
    },
    {
      title:
        'Утвердите согласованный Департаментом список потенциальных членов закупочной комиссии.'
    }
  ]

  return (
    <LayoutPageModal
      clickHandler={() => value.setActiveModal('list-of-participants')}
    >
      <div className={styles.root}>
        <img
          src={images.formationOfNeedTwo}
          alt=""
          width="299px"
          height="335px"
        ></img>
        <h2 className={globalStyles.title}>
          Сформируйте
          <br />
          Закупочную
          <br />
          комиссию
        </h2>
        <p className={globalStyles.textS}>
          Закупочная комиссия формируется Организатором из числа лиц, включенных
          в состав потенциальных членов закупочной комиссии, утвержденный
          генеральным директором{' '}
          <Link to={links.chapter1_4_2.href} target="_blank">
            {links.chapter1_4_2.text}
          </Link>
          .
        </p>
        <Important
          color="#e3f3ff"
          list={importantList}
          width="100%"
          secondaryColor="#39A1ED"
        />
        <div className={styles.block}>
          <h3 className={globalStyles.subtitle}>
            Для чего нужно формировать закупочное подразделение?
          </h3>
          <div>
            <p className={globalStyles.textS}>
              <span>5–15</span>
              общая численность закупочной комиссии
            </p>
            <svg width="39" height="130" viewBox="0 0 39 130">
              <path
                d="M37.6757 0L38.6689 2.87046C32.1358 4.86915 27.4126 8.24992 24.4992 13.0128C21.5857 17.7756 20.129 23.3252 20.129 29.6614V45.4171C20.129 49.2018 19.4448 52.6464 18.0764 55.7507C16.7521 58.8126 14.6112 61.2578 11.6537 63.0864C8.69609 64.8724 4.81154 65.7655 0 65.7655V63.0226C5.87097 63.0226 10.0866 61.4279 12.6469 58.2385C15.2513 55.0491 16.5535 50.7753 16.5535 45.4171V29.6614C16.5535 25.1963 17.1935 21.0288 18.4737 17.159C19.7538 13.2466 21.9168 9.82336 24.9626 6.88911C28.0526 3.91233 32.2903 1.61596 37.6757 0ZM39 127.066L37.6757 130C32.2903 128.342 28.0526 126.066 24.9626 123.175C21.9168 120.283 19.7538 116.902 18.4737 113.032C17.1935 109.205 16.5535 105.059 16.5535 100.594V84.9657C16.5535 81.351 15.9796 78.2254 14.8319 75.5888C13.7284 72.9522 11.9626 70.911 9.5348 69.4652C7.10696 67.9768 3.92869 67.2326 0 67.2326V64.4897C4.81154 64.4897 8.69609 65.404 11.6537 67.2326C14.6112 69.0612 16.7521 71.5276 18.0764 74.632C19.4448 77.6938 20.129 81.1384 20.129 84.9657V100.594C20.129 104.846 20.7912 108.716 22.1154 112.203C23.4839 115.69 25.5586 118.688 28.3396 121.197C31.1205 123.706 34.674 125.662 39 127.066Z"
                fill="#39A1ED"
              />
            </svg>
            <ul>
              {secondaryList.map((item, index) => (
                <li key={index} className={globalStyles.textS}>
                  <span className={globalStyles.title}>{item.count}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={globalStyles.textMediumS}>
              Не могут быть членами комиссии:
            </p>
            <ul>
              {list.map((item, index) => (
                <li
                  key={index}
                  className={classNames(
                    globalStyles.textS,
                    globalStyles.iconPolygon
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.list}>
          <h3 className={globalStyles.subtitle}>
            Как согласовать список членов закупочной комиссии?
          </h3>
          <p className={globalStyles.textS}>
            Тем, кого предполагается включить в состав потенциальных членов
            закупочных комиссий, нужно получить в АСЭЗ роль
            ZS_U_G_DISPLAY_***_00 - Просмотр закупочных процедур *** через ООО
            «Газпром информ».
          </p>
          {stepperList.map((item, index) => (
            <NumberedStepper
              key={index}
              item={item}
              idx={index}
              bgColor="transparent"
            />
          ))}
        </div>
      </div>
    </LayoutPageModal>
  )
}
