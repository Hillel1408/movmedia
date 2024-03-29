import { useContext } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { LayoutPageModal, HorizontalStepper, Important } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './PurchasingDivision.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function PurchasingDivision() {
  const value = useContext(ModalContext)
  const links = value.links.listOfParticipants.purchasingDivision

  const stepperList = [
    { text: 'Материалы методической поддержки' },
    { text: 'Методические материалы' },
    { text: 'Нормативные и регламентные документы ПАО «Газпром»  материалы' },
    { text: 'Контроль закупочной деятельности' }
  ]
  const gridList = [
    {
      icon: globalStyles.iconFileCopy,
      text: 'Подготовьте пакет необходимых документов в соответствии с письмом от 09.07.2019 № 06/46-395'
    },
    {
      icon: globalStyles.iconFolderSupervised,
      text: 'Направьте кандидатуру на согласование в ЦОУЗ'
    },
    {
      icon: globalStyles.iconPersonPin,
      text: 'После согласования выполните процедуры по оформлению кандидата на работу'
    }
  ]
  const importantList = [
    {
      text: 'Кандидатура руководителя закупочного подразделения должна быть одобрена ЦОУЗ.'
    }
  ]
  const secondaryStepperList = [
    { text: 'Сформировать подразделение' },
    { text: 'Назначить его руководителя' },
    { text: 'Организовать рабочее место каждого сотрудника' }
  ]
  const list = [
    {
      title: 'Определите функционал закупочного подразделения.',
      text: '(см. типовой функционал закупочного подразделения)'
    },
    {
      title: 'Рассчитайте численность закупочного подразделения.',
      text: 'Порядок расчета/подходы к расчету численности определены в:',
      subList: [
        'приказе ПАО «Газпром» от 14.03.2017 № 138 «Об утверждении Типовых организационных структур газотранспортных дочерних обществ ПАО «Газпром» — для газотранспортных дочерних обществ ПАО «Газпром» ;',
        'приказе ПАО «Газпром»  от 05.06.2017 № 386 „Об утверждении Типовых организационных структур газодобывающих дочерних обществ ПАО «Газпром» — для газодобывающих дочерних обществ ПАО «Газпром» .'
      ],
      important: [
        {
          text: 'Для дочерних обществ ПАО «Газпром» численность должна быть подтверждена ПАО «Газпром», в том числе согласована с ЦОУЗ (письмо о порядке согласования численности).'
        }
      ]
    },
    { title: 'Разработайте положение о закупочном подразделении.' }
  ]

  return (
    <LayoutPageModal
      clickHandler={() => value.setActiveModal('list-of-participants')}
    >
      <div className={styles.root}>
        <img src={images.threeMan} alt="" width="283px" height="252px"></img>
        <h2 className={globalStyles.title}>
          Сформируйте
          <br />
          Закупочное
          <br />
          подразделение
        </h2>
        <div className={styles.block}>
          <h3 className={globalStyles.subtitle}>
            Для чего нужно формировать закупочное подразделение?
          </h3>
          <p className={globalStyles.textS}>
            Для организации закупочной деятельности должно быть сформировано
            подразделение по подготовке и проведению закупок либо определено
            лицо, ответственное за организацию и проведение закупок, если объем
            закупок незначителен{' '}
            <Link to={links.chapter1_2_45.href} target="_blank">
              {links.chapter1_2_45.text}
            </Link>
            .
          </p>
        </div>
        <div className={styles.stepper}>
          <h3 className={globalStyles.subtitle}>
            Для организации закупочной деятельности нужно:
          </h3>
          <HorizontalStepper
            list={secondaryStepperList}
            color="#39A1ED"
            grid="291px 291px 1fr"
            type="secondary"
          />
          <Important
            color="#e3f3ff"
            list={importantList}
            width="538px"
            secondaryColor="#39A1ED"
          />
        </div>
        <div className={styles.list}>
          <h3 className={globalStyles.subtitle}>
            Как сформировать закупочное подразделение?
          </h3>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <span className={globalStyles.title}>0{index + 1}</span>
                <div>
                  <span className={globalStyles.textMediumS}>{item.title}</span>
                  {item.text && (
                    <p className={globalStyles.textS}>{item.text}</p>
                  )}
                  {item.subList && (
                    <ul>
                      {item.subList.map((item, index) => (
                        <li key={index} className={globalStyles.textS}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.important && (
                    <Important
                      color="#e3f3ff"
                      list={item.important}
                      width="100%"
                      secondaryColor="#39A1ED"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.grid}>
          <h3 className={globalStyles.subtitle}>
            Как согласовать кандидатуру руководителя подразделения или
            специалиста, ответственного за обеспечение закупочной деятельности?
          </h3>
          <p className={globalStyles.textS}>
            <span>Срок согласования:</span>не более 1-го месяца.
          </p>
          <div className={styles.gridList}>
            {gridList.map((item, index) => (
              <p
                key={index}
                className={classNames(globalStyles.textMediumS, item.icon)}
              >
                {item.text}
              </p>
            ))}
          </div>
          <p className={globalStyles.textS}>Письмо размещено в АСЭЗ:</p>
          <HorizontalStepper
            list={stepperList}
            color="#39A1ED"
            grid="173px 148px 215px 1fr"
            type="primary"
          />
        </div>
      </div>
    </LayoutPageModal>
  )
}
