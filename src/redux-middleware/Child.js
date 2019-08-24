import React from 'react'
import { connect } from 'react-redux'
import { fetchAction } from './redux/custom-middleware'

const Child = ({ isLoading, data, isError, getData, getDataFail }) => (
	<>
		<button onClick={getData}>Fire success event</button>
		<button onClick={getDataFail}>Fire fail event</button>
		<p>Loading is: {isLoading.toString()}</p>
		<p>Data is: {JSON.stringify(data)}</p>
		<p>Error is: {isError.toString()}</p>
	</>
)

const mapStateToProps = ({ isLoading, isError, data }) => ({
	isLoading,
	data,
	isError,
})

const getData = () => {
	const promise = new Promise((r, j) => setTimeout(() => r([1, 2, 3]), 3000))
	return fetchAction('GET_DATA', promise)
}

export default connect(mapStateToProps, {
	getData,
	getDataFail: () => fetchAction('GET_MORE_DATA', new Promise((r, j) => setTimeout(() => j(1), 3000))),
})(Child)
