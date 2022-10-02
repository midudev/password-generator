import styles from './styles.module.css'
import './animation.css'

const Toast = ({ message }) => (
	<div className={styles.toast} id='toast'>
		{message}
	</div>
)

export default Toast
