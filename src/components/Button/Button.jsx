import classNames from 'classnames'
import styles from './Button.module.scss'

export default function Button({ href, text }) {
  return (
    <a
      href={href}
      className={classNames('icon-north-east', 'text-s', styles.root)}
    >
      {text}
    </a>
  )
}
