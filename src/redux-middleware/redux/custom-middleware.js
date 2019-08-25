const myMiddleware = ({ dispatch }) => next => action => {
	if (!action.type.startsWith('@')) {
		return next(action)
	}

	if (!(action.requestToMake instanceof Promise)) {
		console.warn('Unable to use middleware because request is not a promise')
		return next(action)
	}

	const actionName = action.type.substring(1)

	dispatch({ type: `${actionName}_START` })

	action.requestToMake
		.then(res => {
			dispatch({
				type: `${actionName}_RECEIVE`,
				payload: res,
			})
		}, err => {
			dispatch({
				type: `${actionName}_ERROR`,
				payload: err,
			})
		})
}

const fetchAction = (type, requestToMake) => ({
	type: `@${type}`,
	requestToMake,
})

export {
	fetchAction,
	myMiddleware,
}
