function* generatorLoop(N) {
  for (let i = 0; i < N; i++) {
    yield i
  }
}

function normalLoop(N) {
  const items = []
  for (let i = 0; i < N; i++) {
    items.push(i)
  }
  return items
}

function measureMemory(func) {
  const before = process.memoryUsage().heapUsed
  console.log('before is ', before)

  let amount = 0
  for (let item of func(10000)) {
    amount += 1
  }

  const after = process.memoryUsage().heapUsed
  console.log('after is ', after)

  console.log('total used is ', after - before)
}

measureMemory(normalLoop)
