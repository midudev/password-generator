function createNotification() {
	const toast = document.getElementById('msj')
	const notif = document.createElement('div')
	notif.classList.add('pg-msj')
	notif.innerText = 'Password copied successfully'
	toast.appendChild(notif)

	setTimeout(() => {
		notif.remove()
	}, 3000)
}

export default createNotification