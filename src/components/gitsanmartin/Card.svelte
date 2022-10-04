<script>
import { store } from '@components/gitsanmartin/store'
import Display from '@components/gitsanmartin/Display.svelte'

let password = 'la password'

const listOfCharacters = {
	uppercase : {min: 65, max: 90},
	lowercase : {min: 97, max: 122},
	num :{min: 48, max: 57},
	symbol: {min: 35, max: 38}
}

let characterAmount = 4
store.subscribe((value) => (password = value))

function getRandomInt(min, max){
	return (Math.floor(Math.random() * (max - min + 1) + min))
}

const generate = () => {
	let password = ''
	
	for (let i = 0; i < characterAmount; i++) {
		const pick = getRandomInt(0, ( Object.keys(listOfCharacters).length) - 1 )
		const [min, max] = [
			Object.values(listOfCharacters)[pick].min,
			Object.values(listOfCharacters)[pick].max
		]

		password += String.fromCharCode(getRandomInt(min, max))
	}
	// console.log('la password es: ', password)
	store.set(password)
}
</script>

<div class="flex flex-col h-screen">

	<picture class="inline-block m-auto">
		<img src='/logo.svg' alt='Generate password' class='w-80' />
	</picture>
	<div class="m-auto">
		<h2 class="glitch mb-5">
			<span aria-hidden="true">super mega password generator 2022</span>
			super mega password generator 2022
			<span aria-hidden="true">super mega password generator 2022</span>
		</h2>

		<Display pinDisplay={password}/>

		<div class="mt-5">cantidad de caracteres: {characterAmount}</div>
		<input type="range" class="w-full" max="30" min="4" bind:value={characterAmount} />

		<button
				on:click={generate}
				class="
					rounded-none
					bg-white
					text-black
					my-5
					py-3
					w-full
					font-bold
					tracking-widest
					rounded-sm
					special"
				>
					Generate pasword
		</button>
		
	</div>
</div>

<style>
	button {
		clip-path: polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px);
	}
	.special {
		filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
		color: rgb(23, 15, 30);
		animation: 1.5s ease 0s infinite alternate none running jNbght;
		background: linear-gradient(90deg, rgb(255, 215, 77) 0%, rgb(64, 221, 255) 30%, rgb(124, 127, 255) 85%) 0% 0% / 200% 100%;
	}
	.special:hover {
		transform: rotate(2deg);
	}
	
	h2 {
		font-size: 2rem;
        font-weight: bold;
        /* letter-spacing: 5px; */
        text-transform: uppercase;
        position: relative;
        text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
        animation: glitch 725ms infinite;
        /* animation: glitch 0.6s infinite linear; */
	}
	.glitch span {
        position: absolute;
        top: 0;
        left: 0;
    }
	.glitch span:first-child {
        animation: glitch 500ms infinite;
        clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        transform: translate(-0.04em, -0.03em);
        opacity: 0.75;
    }
    .glitch span:last-child {
        animation: glitch 375ms infinite;
        clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        transform: translate(0.04em, 0.03em);
        opacity: 0.75;
    }
	@keyframes glitch {
		0% {
			text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
			0.025em 0.04em 0 #fffc00;
		}
		15% {
			text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
			0.025em 0.04em 0 #fffc00;
		}
		16% {
			text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
			-0.05em -0.05em 0 #fffc00;
		}
		49% {
			text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
			-0.05em -0.05em 0 #fffc00;
		}
		50% {
			text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
			0 -0.04em 0 #fffc00;
		}
		99% {
			text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
			0 -0.04em 0 #fffc00;
		}
		100% {
			text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
			-0.04em -0.025em 0 #fffc00;
		}
	}
</style>