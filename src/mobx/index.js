import React, { useContext, createContext } from 'react'
import { useLocalStore, useObserver } from 'mobx-react'

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    count: 0,
    increaseCount() {
      store.count += 1
    }
  }))

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
} 

const Count = () => {
  const store = useContext(StoreContext)
  return useObserver(() => (
    <div>{store.count}</div>
  ))
}

const CounterIncrease = () => {
  const { increaseCount } = useContext(StoreContext)
  return (
    <button onClick={increaseCount}>Increase</button>
  )
}

function MobXComponent() {
  return (
    <StoreProvider>
      <Count />
      <CounterIncrease />
    </StoreProvider>
  )
}

export default MobXComponent
