export const getTodosBegin = () => ({
    type: 'GET_TODOS_BEGIN',
})

export const getTodosSuccess = (response) => ({
    type: 'GET_TODOS_SUCCESS',
    payload: response.data,
})

export const getTodosError = (error) => ({
    type: 'GET_TODOS_ERROR',
    payload: error,
})