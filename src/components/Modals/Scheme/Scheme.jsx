import { createPortal } from 'react-dom'
import { Overlay, BackButton, Spoiler } from '../../index'
import styles from './Scheme.module.scss'
import classNames from 'classnames'

export default function Scheme({ setActiveModal }) {
  const spoilers = [
    {
      image: {
        url: '/images/scheme/img-2.webp',
        width: '284px',
        height: '241px'
      },
      title: 'Формирование потребности',
      text: 'У компании появляется необходимость провести закупку. На данном этапе необходимо собрать данные о потребности, изучить рынок, в том числе собрать ценовую информацию, изучить рыночные условия обращения товара (работы, услуги), определить состояние конкурентной среды, собрать исходные по закупке (описать предмет, определить потенциальных исполнителей и требования к ним, исключить дублирование и изучить ретроспективу аналогичных закупок).',
      participants: [{ icon: 'icon-support-agent', text: 'Инициатор закупки' }],
      registration: []
    },
    {
      image: {
        url: '/images/scheme/img-3.webp',
        width: '340px',
        height: '239px'
      },
      title: 'Включение в план закупок Группы Газпром',
      text: 'Закупку нужно планировать заблаговременно и включать в план закупок Группы Газпром. Для этого понадобится АСЭЗ.',
      participants: [
        { icon: 'icon-admin-panel-settings', text: 'ЦОУЗ' },
        { icon: 'icon-record-voice-over', text: 'Централизованный поставщик' },
        { icon: 'icon-groups', text: 'Закупочное подразделение' },
        { icon: 'icon-support-agent', text: 'Инициатор закупки' }
      ],
      registration: ['ЕИС', 'АСЭЗ']
    },
    {
      image: {
        url: '/images/scheme/img-4.webp',
        width: '232px',
        height: '166px'
      },
      title: 'Организация закупки',
      text: 'После включения закупки в план, ее нужно организовать: собрать исходные данные, провести закупку, определить поставщика (подрядчика, исполнителя). Порядок проведения закупки зависит от её условий (предмета, способа, цены и прочих условий).',
      participants: [
        { icon: 'icon-partner-exchange', text: 'Закупочная комиссия' },
        { icon: 'icon-person-play', text: 'Организатор закупки' },
        { icon: 'icon-admin-panel-settings', text: 'ЦОУЗ' },
        { icon: 'icon-groups', text: 'Закупочное подразделение' }
      ],
      registration: ['ЕИС', 'АСЭЗ', 'ЭТП']
    },
    {
      image: {
        url: '/images/scheme/img-5.webp',
        width: '357px',
        height: '188px'
      },
      title: 'Заключение договоров',
      text: 'По итогам проведения закупки нужно заключить договор с соблюдением установленных сроков и требований.',
      participants: [
        { icon: 'icon-record-voice-over', text: 'Централизованный поставщик' },
        { icon: 'icon-support-agent', text: 'Инициатор закупки' }
      ],
      registration: ['ЕИС', 'ПУР АСБУ', 'ЭТП ГПБ']
    },
    {
      image: {
        url: '/images/scheme/img-6.webp',
        width: '325px',
        height: '189px'
      },
      title: 'Внесение изменений в договоры или их исполнение',
      text: 'При исполнении договоров необходимо соблюдать условия договора и требования Положения о закупках. Внесение изменений в договор требует согласования с ЦОУЗ в случаях, установленных ЦОУЗ. Порядок такого согласования устанавливает ЦОУЗ.',
      participants: [
        { icon: 'icon-partner-exchange', text: 'Закупочная комиссия' },
        { icon: 'icon-person-play', text: 'Организатор закупки' },
        { icon: 'icon-admin-panel-settings', text: 'ЦОУЗ' },
        { icon: 'icon-groups', text: 'Закупочное подразделение' }
      ],
      registration: ['ЕИС', 'АСЭЗ', 'ЭТП']
    }
  ]

  return createPortal(
    <div>
      <Overlay
        clickHandler={() => {
          setActiveModal('')
        }}
      />
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.root}>
          <BackButton
            clickHandler={() => {
              setActiveModal('')
            }}
          />
          <div className={styles.grid}>
            <h2 className="subtitle">
              Закупочная деятельность в Группе Газпром осуществляются в
              соответствии с едиными правилами и принципами. В этом разделе мы
              подробно рассказываем, как устроен закупочный процесс.
            </h2>
            <p className="text-xs">
              <span>
                Реестр потенциальных участников закупок Группы Газпром
              </span>{' '}
              - формируется по итогам проведения предквалификации, организатором
              которой выступает ЦОУЗ.
              <br />
              <br />
              <span>Единый реестр МТР</span> – Держателем является Департамент
              ПАО «Газпром».
            </p>
          </div>
          <div className={styles.spoilers}>
            {spoilers.map((item, index) => (
              <Spoiler key={index} item={item} />
            ))}
            <div className={styles.lastSpoiler}>
              <img
                src="/images/scheme/img-1.webp"
                alt=""
                width="254px"
                height="206px"
              ></img>
              <div>
                <div>
                  <h3>
                    Методологическое обеспечение и координация закупочной
                    деятельности
                  </h3>
                  <p className="text-s">
                    Весь процесс должен быть описан в регламентных документах и
                    организован с соблюдением надлежащей последовательности.
                  </p>
                </div>
                <div>
                  <h3>Контроль и отчетность</h3>
                  <p className="text-s">
                    В компании должен быть организован контроль исполнения шагов
                    по процессу и процедура формирования отчетности по закупкам.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-medium-s">В процессе участвуют</p>
                <ul className="text-s">
                  <li className="icon-admin-panel-settings">ЦОУЗ</li>
                  <li className="icon-groups">Закупочное подразделение</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('interactive-course-portal')
  )
}
