import ClipboardIcon from './icons/ClipboardIcon'
import styles from './styles/neumorphism.module.css'

function CopyButton({ handleCopy, disabled }) {
	return (
		<button
			onClick={handleCopy}
			className={`p-4 rounded-full bg-gray-100 ${styles.noHighlight} ${styles.neuShadow}`}
			disabled={disabled}
		>
			<ClipboardIcon width={24} height={24} fill={'black'} />
		</button>
	)
}

export default CopyButton
