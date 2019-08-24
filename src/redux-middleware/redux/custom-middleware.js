const myMiddleware = ({ dispatch }) => next => action => {
	if (!action.type.startsWith('@')) {
		return next(action)
	}

	if (!(action.requestToMake instanceof Promise)) {
		console.warn('Unable to use middleware because request is not a promise')
		return next(action)
	}

	const newActionName = action.type.substring(1)

	dispatch({ type: `${newActionName}_START` })

	action.requestToMake
		.then(res => {
			dispatch({
				type: `${newActionName}_RECEIVE`,
				payload: res,
			})
		})
		.catch(err => {
			dispatch({
				type: `${newActionName}_ERROR`,
				payload: err,
			})
		})
}

export default myMiddleware
