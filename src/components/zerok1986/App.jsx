import React from 'react'
import './App.css'

export default function App() {
  return (
	<div class='box'>
		<div class='text-white'>
			<div id='password-generator'>
				<input type='text' id='password' />
				<button id='copy'>Copy</button>
				<div id='settings'>
					<label for='length'>Length</label>
					<input type='range' id='length' value='8' min='6' max='24' />
					<p id='value'></p>
				</div>
				<button id='generate'>Generate Password</button>
			</div>
		</div>
	</div>
  )
}

