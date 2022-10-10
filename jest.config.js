module.exports = {
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	}
}
