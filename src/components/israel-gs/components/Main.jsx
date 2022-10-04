import React, { useState } from 'react'
import PasswordFilter from './PasswordFilter.jsx'
import PasswordResult from './PasswordResult.jsx'
import passwordGenerator from '@components/israel-gs/helpers/passwordGenerator.ts'

export default function Main() {
	const [password, setPassword] = useState('...')
	const [filters, setFilters] = useState([])

	const handleFilterChange = (filters) => {
		setFilters(filters)
		setPassword(passwordGenerator(...filters))
	}

	const handleRefresh = () => {
		setPassword(passwordGenerator(...filters))
	}

	const handleCopy = async () => {
		await navigator.clipboard.writeText(password)
	}

	return (
		<>
			<PasswordResult onCopy={handleCopy} onRefresh={handleRefresh} password={password} />
			<PasswordFilter onChange={handleFilterChange} />
		</>
	)
}
