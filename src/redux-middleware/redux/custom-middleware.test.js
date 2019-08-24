import { fetchAction, myMiddleware } from './custom-middleware'

describe('my custom middleware', () => {
	const store = {
		state: {},
		dispatch: jest.fn(),
	}

	const next = jest.fn()

	describe('when it receives an ordinary action', () => {
		const action = { type: 'ORDINARY_ACTION' }
		test('ignores', () => {
			myMiddleware(store)(next)(action)
			expect(next).toHaveBeenCalledWith(action)
		})
	})

	describe('when it receives an action without a promise payload', () => {
		const action = { type: '@TEST_ACTION', requestToMake: () => {} }
		test('warns', () => {
			myMiddleware(store)(next)(action)
			expect(next).toHaveBeenCalledWith(action)
		})
	})

	describe('works', () => {
		const action = { 
			type: '@TEST_ACTION',
			requestToMake: new Promise(r => r([1, 2, 3]))
		}

		test('works', () => {
			myMiddleware(store)(next)(action)
			expect(store.dispatch).toHaveBeenCalledWith({ type: 'TEST_ACTION_START' })
		})
	})
})

describe('my custom middleware fetch action', () => {
  test('returns an action of the correct form', () => {
		const promise = new Promise(r => r())
		expect(fetchAction('TEST_ACTION', promise)).toEqual({
			type: '@TEST_ACTION',
			requestToMake: promise,
		})
  })  
})