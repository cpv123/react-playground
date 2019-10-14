import React, { useState } from 'react'
import { connect } from 'react-redux'

const MyComponent = ({ addItem, applyDiscount, discount, items }) => {
	const [count, setCount] = useState(1)
  return (
    <div>
			<div>{JSON.stringify(items)}</div>
			<button onClick={() => {
				setCount(prevCount => prevCount + 1)
				addItem(count)
			}}
			>
				Add item
			</button>
			<div>Discount: {discount}</div>
			<button onClick={() => applyDiscount(count * 10)}>Apply discount</button>
		</div>
  )
}

const addItem = itemNumber => ({
	type: 'ADD_TO_BASKET',
	item: {
		name: `Item number: ${itemNumber}`
	}
})

const applyDiscount = discount => ({
	type: 'APPLY_DISCOUNT',
	discount,
})

const mapStateToProps = state => ({
	items: state.basket.items,
	discount: state.basket.price.discountApplied,
})

export default connect(mapStateToProps, {
	addItem: itemNumber => addItem(itemNumber),
	applyDiscount,
})(MyComponent)