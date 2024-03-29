import { useContext } from 'react'
import classNames from 'classnames'
import { LayoutPageModal, Stepper } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './Etpgpb.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function Etpgpb() {
  const value = useContext(ModalContext)
  const links = value.links.informationSystems.etpgpb

  const list = [
    'Основная масса закупок в Группе Газпром проводится в электронном виде на ЭТП ГПБ.',
    'АСЭЗ синхронизирована с ЭТП ГПБ.'
  ]
  const steps = [
    {
      title: 'Определите ответственных лиц для работы на ЭТП ГПБ.',
      text: 'Это могут быть работники Закупочного подразделения, включая работника, который будет администрировать учетные записи пользователей в системе.'
    },
    {
      title:
        'Пройдите регистрацию на сайте ЭТП ГПБ в секции «Закупки Группы Газпром».',
      text: 'Укажите общие сведения о компании и уполномоченном сотруднике.'
    },
    {
      title:
        'Настройте в Личном кабинете ЭТП ГПБ связь учетной записи компании с Личным кабинетом в ЕИС.'
    },
    {
      title:
        'Пройдите регистрацию на сайте ЭТП ГПБ в секции «Торговый портал».',
      text: 'Укажите общие сведения о компании и уполномоченном сотруднике.'
    }
  ]
  const secondaryList = [
    'Настройте интернет-браузер.',
    'Установите и настройте программное обеспечение для работы с электронной подписью.'
  ]

  return (
    <LayoutPageModal
      clickHandler={() => value.setActiveModal('information-systems')}
    >
      <div className={styles.root}>
        <img src={images.computer} alt="" width="253px" height="233px" />
        <h2 className={globalStyles.title}>ЭТП ГПБ</h2>
        <p className={globalStyles.textS}>
          Используется для закупок по{' '}
          <a href={links.fz223.href}>{links.fz223.text}</a>,{' '}
          <a href={links.fz44.href}>{links.fz44.text}</a> и коммерческих
          тендеров, проведения онлайн торгов и аукционов, выдачи ЭЦП и
          банковских гарантий.
        </p>
        <div className={styles.grid}>
          <h3 className={globalStyles.subtitle}>
            Зачем регистрироваться на ЭТП?
          </h3>
          <div>
            {list.map((item, index) => (
              <p
                key={index}
                className={classNames(
                  globalStyles.textS,
                  globalStyles.iconPolygon
                )}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.stepper}>
          <h3 className={globalStyles.subtitle}>
            Как зарегистрироваться на ЭТП?
          </h3>
          <p className={globalStyles.textS}>
            Служба поддержки ЭТП ГПБ: 8-495-276-00-51 добавочный 396. E-mail:
            tech@etpgpb.ru.
          </p>
          <Stepper
            image={images.cloudWithMan}
            steps={steps}
            width="221px"
            height="199px"
          />
        </div>
        <div className={styles.secondaryGrid}>
          <h3 className={globalStyles.subtitle}>
            Инструкция для работы на ЭТП ГПБ.
          </h3>
          <div>
            {secondaryList.map((item, index) => (
              <p
                key={index}
                className={classNames(
                  globalStyles.textS,
                  globalStyles.iconPolygon
                )}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </LayoutPageModal>
  )
}
