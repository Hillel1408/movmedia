import { CSSTransition } from "react-transition-group";

export default function Transition({ children, activeModal }) {
    return (
        <CSSTransition in={activeModal} timeout={300} classNames="animation" mountOnEnter unmountOnExit>
            {children}
        </CSSTransition>
    );
}
