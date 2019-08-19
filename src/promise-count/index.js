import React, { useState } from 'react'
import PromiseCount from './promise-count.js'

const PromiseCounter = () => {
    const [sucessCount, setSuccessCount] = useState(0)
    const [failCount, setFailCount] = useState(0)

    const handleClick = async () => {
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => reject(1), 3000)
        })
        const promise2 = new Promise((resolve, reject) => resolve(2))
        const promises = [promise1, promise2, promise2]

        const results = await PromiseCount(promises);

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

export default PromiseCounter