import React, { useState, useEffect } from 'react'

function InfiniteScroll() {
  const [items, setItems] = useState([])
  const [shouldLoadMore, setShouldLoadMore] = useState(true)
  const [itemsLoading, setItemsLoading] = useState(false)

  const generateMoreItems = () => {
    const newItems = Array(75).fill(<li>Item</li>)
    setItemsLoading(true)
    setTimeout(() => {
      setItems([...items, ...newItems])
      setItemsLoading(false)
      setShouldLoadMore(false)
    }, 2000)
  }

  useEffect(() => {
    generateMoreItems()
  }, [shouldLoadMore])

  window.onscroll  = () => {
    if (window.scrollY + window.innerHeight === 
      document.documentElement.offsetHeight
    ) {
      setShouldLoadMore(true)
    }
  }

  return (
    <div style={{ margin: 20 }}>
      <ul id='list'>{items.map(item => item)}</ul>
      {itemsLoading && <span>Loading...</span>}
    </div>
  )
}

export default InfiniteScroll
