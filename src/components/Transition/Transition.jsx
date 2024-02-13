import { CSSTransition } from 'react-transition-group'

export default function Transition({ children, activeModal, cls, timeout }) {
  return (
    <CSSTransition
      in={activeModal}
      timeout={timeout ? timeout : 300}
      classNames={cls}
      mountOnEnter
      unmountOnExit
    >
      {children}
    </CSSTransition>
  )
}
