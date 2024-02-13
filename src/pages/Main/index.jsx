import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Switcher, Menu, Scheme, Transition, Loader } from '../../components'
import styles from './Main.module.scss'

export default function Main() {
  const [activeModal, setActiveModal] = useState(false)
  const [activeTooltip, setActiveTooltip] = useState('')
  const [activeSwitcher, setActiveSwitcher] = useState(false)
  const [loading, setLoading] = useState(true)

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
        url: '/images/main/pedestals/1/img-1.avif',
        width: '283px',
        height: '317px'
      },
      imageBottom: {
        url: '/images/main/pedestals/1/img-2.avif',
        width: '283px',
        height: '259px'
      },
      button: {
        text: 'Создать нормативную базу',
        icon: 'icon-box-edit',
        modal: 'normative-base'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/2/img-1.avif',
        width: '283px',
        height: '309px'
      },
      imageBottom: {
        url: '/images/main/pedestals/2/img-2.avif',
        width: '283px',
        height: '330px'
      },
      button: {
        text: 'Организовать работу в информационных системах',
        icon: 'icon-display-settings',
        modal: 'information-systems'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/3/img-1.avif',
        width: '283px',
        height: '300px'
      },
      imageBottom: {
        url: '/images/main/pedestals/3/img-2.avif',
        width: '283px',
        height: '292px'
      },
      button: {
        text: 'Обеспечить контроль, работу с договорами, формирование отчетности',
        icon: 'icon-folder-open',
        modal: 'working-with-contracts'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/4/img-1.avif',
        width: '283px',
        height: '323px'
      },
      imageBottom: {
        url: '/images/main/pedestals/4/img-2.avif',
        width: '283px',
        height: '368px'
      },
      button: {
        text: 'Настроить отдельные элементы планирования',
        icon: 'icon-monitoring',
        modal: 'planning-elements'
      }
    },
    {
      imageTop: {
        url: '/images/main/pedestals/5/img-1.avif',
        width: '283px',
        height: '334px'
      },
      imageBottom: {
        url: '/images/main/pedestals/5/img-2.avif',
        width: '287px',
        height: '420px'
      },
      button: {
        text: 'Наладить взаимодействие участников процесса',
        icon: 'icon-groups',
        modal: 'list-of-participants'
      }
    }
  ]

  activeModal
    ? document.body.classList.add('lock')
    : document.body.classList.remove('lock')

  const clickHandler = e => {
    if (!e.target.closest('.btnTooltipOpen')) setActiveTooltip(false)
  }

  const cacheImages = async srcArray => {
    const promises = await srcArray.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
      })
    })
    await Promise.all(promises)
    setLoading(false)
  }

  useEffect(() => {
    cacheImages(
      [].concat(
        ...pedestals.map(pd => [pd.imageTop.url, pd.imageBottom.url]),
        '/images/main/main.avif'
      )
    )
    window.addEventListener('click', clickHandler)
    return () => {
      window.removeEventListener('click', clickHandler)
    }
  }, [])

  return (
    <>
      <div className="container">
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
                    'icon-deployed-code-alert',
                    'text-xs',
                    'btnTooltipOpen'
                  )}
                  onClick={() =>
                    setActiveTooltip(prev =>
                      prev === 'standards' ? '' : 'standards'
                    )
                  }
                >
                  Почему моей компании нужно переходить на корпоративные
                  закупочные стандарты Группы Газпром?
                </button>
                <p
                  className={classNames(
                    'text-xs',
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
              <h2 className="subtitle">
                Что необходимо сделать для организации закупочного деятельности
                по единым требованиям в Группе Газпром?
              </h2>
              <p className="text-s">
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
                      'text-medium-xs',
                      'icon-notification-important'
                    )}
                  >
                    Обратите внимание, состав мероприятий относится к
                    заказщикам, работающим по 223-ФЗ.
                  </p>
                  <div className={styles.headerLinkBtn}>
                    <button
                      className={classNames(
                        'text-s',
                        'icon-chevron-right',
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
                        'text-s',
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
                  'icon-tabs',
                  'text-medium-s'
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
          {loading ? (
            <Loader />
          ) : (
            <>
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
                src="/images/main/main.avif"
                alt=""
                width="1440px"
                height="722px"
              />
            </>
          )}
        </div>
      </div>

      <Transition
        activeModal={activeModal === 'scheme'}
        cls="animation"
        timeout={350}
      >
        <Scheme setActiveModal={setActiveModal} />
      </Transition>

      <Transition
        activeModal={activeModal !== 'scheme' && activeModal}
        cls="animation"
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
