import React, { useState } from 'react'
import BufferQueue from './buffer-queue'

const functionToExecute = items => {
	alert('Finaliser executed with ', items.length, 'items')
}

const myQueue = new BufferQueue(functionToExecute, 5)

function BufferQueueComponent() {

	const [currentItem, setCurrentItem] = useState(0)

	const handleClick = () => {
		myQueue.add(currentItem)
		setCurrentItem(currentItem + 1)
	}
	
	return (
		<div>
			<button onClick={handleClick}>Add item to queue</button>
		</div>
	)
}

export default BufferQueueComponent
