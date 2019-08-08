import React, { useState } from 'react'
import promiseCount from './promise-count.js'

const PromiseCount = () => {
    const [sucessCount, setSuccessCount] = useState(0)
    const [failCount, setFailCount] = useState(0)

    const handleClick = async () => {
        const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(1), 5000))
        const promise2 = new Promise((resolve, reject) => resolve(2))
        const promises = [promise1, promise2, promise2]

        const results = await promiseCount(promises)

        setSuccessCount(results.filter(r => r.success).length)
        setFailCount(results.filter(r => !r.success).length)
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <p>Catch count success: {sucessCount}</p>
            <p>Catch count fail: {failCount}</p>
        </div>
    )
}

export default PromiseCount