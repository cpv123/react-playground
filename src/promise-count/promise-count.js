const promiseCount = async promises => {
    const results = []

    for (let promise of promises) {
        await promise
            .then(value => results.push({
                success: true,
                value,
            }))
            .catch(value => results.push({
                success: false,
                value
            }))
    }

    return results;
}

export default promiseCount;