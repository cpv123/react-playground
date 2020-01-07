import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'

const MyComponent = () => {
  const dispatch = useDispatch()
  const todos = useSelector(store => store.todos)
  const toggleComplete = () => dispatch(
    { 
      type: 'TOGGLE_COMPLETE',
      payload: true,
      todoId: 'a',
    }
  )

  return (
    <div>
			{Object.keys(todos).map(key => (
        <div key={key}>{todos[key].id} - {JSON.stringify(todos[key].isComplete)}</div>
      ))}
      <button onClick={toggleComplete}>Complete first todo</button>
		</div>
  )
}

export default MyComponent
