const unfreeze = obj => {
  if (!Object.isFrozen(obj)) {
    return obj
  }
  if (Array.isArray(obj)) {
    return Array.from(obj)
  }
  return Object.assign({}, obj)
}

const immu = obj => Object.freeze(obj)

const createNewState = (currentState, updater) => {
  const draftState = unfreeze(currentState)
  updater(draftState)
  return immu(draftState)
}

export {
  immu,
  createNewState,
}
