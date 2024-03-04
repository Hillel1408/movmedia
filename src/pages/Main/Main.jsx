import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Switcher, Menu, Scheme, Transition, Loader } from '../../components'
import styles from './Main.module.scss'
import globalStyles from '../../styles/Globals.module.scss'

import images from '../../assets/images'

export default function Main() {
  const [activeModal, setActiveModal] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState('')
  const [activeSwitcher, setActiveSwitcher] = useState(false)

  const list = [
    'государственные корпорации;',
    'государственные компании;',
    'публично-правовые компании;',
    'субъекты естественных монополий;',
    'организации, осуществляющие регулируемые виды деятельности в сфере электроснабжения, газоснабжения, теплоснабжения, водоснабжения, водоотведения, очистки сточных вод, обращения с твердыми коммунальными отходами, автономными учреждениями, хозяйственные общества, в уставном капитале которых доля участия Российской Федерации, субъекта Российской Федерации, муниципального образования в совокупности превышает 50%;',
    'дочерние хозяйственные общества, в уставном капитале которых более 50% долей в совокупности принадлежит указанным выше юридическим лицам;',
    'дочерние хозяйственные общества, в уставном капитале которых более 50% долей в совокупности принадлежит указанным выше дочерним хозяйственным обществам.'
  ]
  const pedestals = [
    {
      imageTop: {
        url: '/images/main/pedestals/1/pedestalTop1.avif',
        width: '283px',
        height: '317px'
      },
      imageBottom: {
        url: '/images/main/pedestals/1/pedestalBottom1.avif',
        width: '283px',
        height: '259px'
      },
      button: {
        text: 'Создать нормативную базу',
        icon: globalStyles.iconBoxEdit,
        modal: 'normative-base'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/2/pedestalTop2.avif',
        width: '283px',
        height: '309px'
      },
      imageBottom: {
        url: '/images/main/pedestals/2/pedestalBottom2.avif',
        width: '283px',
        height: '330px'
      },
      button: {
        text: 'Организовать работу в информационных системах',
        icon: globalStyles.iconDisplaySettings,
        modal: 'information-systems'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/3/pedestalTop3.avif',
        width: '283px',
        height: '300px'
      },
      imageBottom: {
        url: '/images/main/pedestals/3/pedestalBottom3.avif',
        width: '283px',
        height: '292px'
      },
      button: {
        text: 'Обеспечить контроль, работу с договорами, формирование отчетности',
        icon: globalStyles.iconFolderOpen,
        modal: 'working-with-contracts'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/4/pedestalTop4.avif',
        width: '283px',
        height: '323px'
      },
      imageBottom: {
        url: '/images/main/pedestals/4/pedestalBottom4.avif',
        width: '283px',
        height: '368px'
      },
      button: {
        text: 'Настроить отдельные элементы планирования',
        icon: globalStyles.iconMonitoring,
        modal: 'planning-elements'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/5/pedestalTop5.avif',
        width: '283px',
        height: '334px'
      },
      imageBottom: {
        url: '/images/main/pedestals/5/pedestalBottom5.avif',
        width: '287px',
        height: '420px'
      },
      button: {
        text: 'Наладить взаимодействие участников процесса',
        icon: globalStyles.iconGroups,
        modal: 'list-of-participants'
      }
    }
  ]

  activeModal
    ? document.body.classList.add(globalStyles.lock)
    : document.body.classList.remove(globalStyles.lock)

  const clickHandler = e => {
    if (!e.target.closest('.btnTooltipOpen')) setActiveTooltip(false)
  }

  useEffect(() => {
    window.addEventListener('click', clickHandler)
    return () => {
      window.removeEventListener('click', clickHandler)
    }
  }, [])

  return (
    <>
      <div className={classNames(globalStyles.container, styles.root)}>
        <div className={styles.header}>
          <div className={styles.headerFlex}>
            <div>
              <div
                className={styles.headerBtn}
                style={{
                  backgroundColor: activeTooltip === 'standards' && 'white'
                }}
              >
                <button
                  className={classNames(
                    globalStyles.iconDeployedCodeAlert,
                    globalStyles.textXs,
                    'btnTooltipOpen'
                  )}
                  onClick={() =>
                    setActiveTooltip(prev =>
                      prev === 'standards' ? '' : 'standards'
                    )
                  }
                >
                  Почему моей компании нужно переходить на корпоративные
                  закупочные правила Группы Газпром?
                </button>
                <p
                  className={classNames(
                    globalStyles.textXs,
                    activeTooltip === 'standards' && styles.activeTooltip
                  )}
                  onClick={e => e.stopPropagation()}
                >
                  Компании Группы Газпром ведут свою закупочную деятельность в
                  соответствии с едиными правилами и в соответствии с
                  принципами, установленными в Положении о закупках товаров,
                  работ, услуг ПАО «Газпром» и Компаний Группы Газпром —
                  Положение ПАО «Газпром».
                </p>
              </div>
              <h2 className={globalStyles.subtitle}>
                Что необходимо сделать для организации закупочной деятельности
                по единым требованиям в Группе Газпром?
              </h2>
              <p className={globalStyles.textS}>
                Для организации закупочного процесса в соответствии с
                корпоративными правилами Группы Газпром необходимо сформировать
                инфраструктуру системы управления закупочной деятельностью и
                настроить работу всех ее элементов.
              </p>
            </div>
            <div>
              <div className={styles.headerSecondaryFlex}>
                <div>
                  <p
                    className={classNames(
                      globalStyles.textMediumXs,
                      globalStyles.iconNotificationImportant
                    )}
                  >
                    Обратите внимание, состав мероприятий относится к
                    заказщикам, работающим по 223-ФЗ.
                  </p>
                  <div className={styles.headerLinkBtn}>
                    <button
                      className={classNames(
                        globalStyles.textS,
                        globalStyles.iconChevronRight,
                        'btnTooltipOpen'
                      )}
                      onClick={() =>
                        setActiveTooltip(prev =>
                          prev === '223-fz' ? '' : '223-fz'
                        )
                      }
                    >
                      Кто к ним относится
                    </button>
                    <ul
                      className={classNames(
                        globalStyles.textS,
                        activeTooltip === '223-fz' && styles.activeTooltip
                      )}
                      onClick={e => e.stopPropagation()}
                    >
                      {list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Switcher
                  activeSwitcher={activeSwitcher}
                  setActiveSwitcher={setActiveSwitcher}
                />
              </div>
              <button
                className={classNames(
                  styles.headerSecondaryBtn,
                  globalStyles.iconTabs,
                  globalStyles.textMediumS
                )}
                onClick={() => {
                  setActiveModal('scheme')
                }}
              >
                Перед началом обучения предлагаем ознакомиться с тем, как
                устроена закупочная система
              </button>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationPedestals}>
            {pedestals.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveModal(item.button.modal)
                }}
              >
                <img
                  src={item.imageTop.url}
                  alt=""
                  width={item.imageTop.width}
                  height={item.imageTop.height}
                ></img>
                <img
                  src={item.imageBottom.url}
                  alt=""
                  width={item.imageBottom.width}
                  height={item.imageBottom.height}
                ></img>
                <button className={classNames(item.button.icon)}>
                  {item.button.text}
                </button>
              </div>
            ))}
          </div>
          <img
            src="/images/main/mainBg.avif"
            alt=""
            width="1440px"
            height="722px"
          />
        </div>
      </div>

      <Transition
        activeModal={activeModal === 'scheme'}
        cls="interactive-course-animation"
        timeout={350}
      >
        <Scheme setActiveModal={setActiveModal} />
      </Transition>

      <Transition
        activeModal={Boolean(activeModal !== 'scheme' && activeModal)}
        cls="interactive-course-animation"
        timeout={350}
      >
        <Menu
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          activeSwitcher={activeSwitcher}
        />
      </Transition>
    </>
  )
}
