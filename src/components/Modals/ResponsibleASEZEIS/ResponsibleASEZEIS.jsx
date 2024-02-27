import { useContext } from 'react'
import { LayoutPageModal } from '../../index'
import { ModalContext } from '../Menu/Menu'
import styles from './ResponsibleASEZEIS.module.scss'
import globalStyles from '../../../styles/Globals.module.scss'

import images from '../../../assets/images'

export default function ResponsibleASEZEIS() {
  const value = useContext(ModalContext)

  return (
    <LayoutPageModal
      clickHandler={() => value.setActiveModal('list-of-participants')}
    >
      <div className={styles.root}>
        <img
          src={images.manAtTheComputerTwo}
          alt=""
          width="276px"
          height="256px"
        ></img>
        <h2 className={globalStyles.title}>
          Ответственные
          <br /> за работу в ЕИС
          <br /> и АСЭЗ
        </h2>
        <h3 className={globalStyles.subtitle}>
          Определите ответственных работников Закупочного подразделения за
          работу в ЕИС и АСЭЗ.
        </h3>
        <p className={globalStyles.textS}>
          Для этого утвердите приказ об ответственных за работу в ЕИС и АСЭЗ с
          учетом прав, предоставленных для работы в ЕИС и АСЭЗ (см. блоки про
          регистрацию Заказчика в{' '}
          <button onClick={() => value.setActiveModal('eis')}>ЕИС</button> и{' '}
          <button onClick={() => value.setActiveModal('asez')}>АСЭЗ</button>)
        </p>
      </div>
    </LayoutPageModal>
  )
}
