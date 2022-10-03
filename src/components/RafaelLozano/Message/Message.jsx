import './message.css'
const Message = ({ visible, children }) => {
	return (
		<div className={visible ? '--visible message__container' : '--hide message__container'}>
			{children}
		</div>
	)
}

export default Message
