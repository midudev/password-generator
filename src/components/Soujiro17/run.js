export const run = (message, success = true) => {
	const toast = document.getElementById("toast")

	toast.style.display = 'flex'
	toast.style.backgroundColor = success? 'rgba(96, 206, 68, 0.822)' : 'rgb(206, 46, 46)'
	toast.innerHTML = message
	
	if(!toast.classList.contains('animation--enter')){
		toast.className+= ' animation--enter'
	}
	
	setTimeout(() => {
		toast.classList.remove('animation--enter')
	}, 4000)
	
	setTimeout(() => {
		toast.className+= ' animation--close'
	}, 5000)

	setTimeout(() => {
		toast.style.display = 'none'
		toast.innerHTML = ''
		toast.classList.remove('animation--close')
	}, 5200)

	toast.onclick = () => {
		toast.classList.remove('animation--enter')
		toast.className+= ' animation--close'

		setTimeout(() => {
			toast.style.display = 'none'
		}, 200)
	}
	
}