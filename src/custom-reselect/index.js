function selector(inputSelectors, finalSelector) {
  const inputValues = inputSelectors.map(selector => {
    return selector();
  })

  const cached = cache(finalSelector);
  return cached(...inputValues);
}

function cache(func) {
  let prevArgs = [];
  let prevResult = null;

  return (...args) => {
    const argsHaveChanged = (
      prevArgs.length !== args.length
      || args.filter((arg, i) => arg !== prevArgs[i]).length
    )
    if (argsHaveChanged) {
      prevResult = func(...args);
    }
    prevArgs = args;
    return prevResult;
  }
}

export default selector;
