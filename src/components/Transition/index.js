import { CSSTransition } from "react-transition-group";

export default function Transition({ children, activeModal, cls }) {
    return (
        <CSSTransition in={activeModal} timeout={300} classNames={cls} unmountOnExit>
            {children}
        </CSSTransition>
    );
}
