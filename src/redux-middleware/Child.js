import React from 'react'
import { connect } from 'react-redux'
import { getData, getDataFail } from './redux/actions'

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

export default connect(mapStateToProps, {
	getData,
	getDataFail,
})(Child)
