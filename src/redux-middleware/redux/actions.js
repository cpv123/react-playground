export const getData = () => ({
  type: '@GET_DATA',
  requestToMake: new Promise((r, j) => setTimeout(() => r([1, 2, 3]), 3000))
})

export const getDataFail = () => ({
  type: '@GET_MORE_DATA',
  requestToMake: new Promise((r, j) => setTimeout(() => j(1), 3000))
})