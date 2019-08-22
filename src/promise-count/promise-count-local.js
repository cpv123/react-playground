const PromiseCount = promises => {
    const results = [];

    const successHandler = value => results.push({
        success: true,
        value,
    });

    const errorHandler = value => results.push({
        success: false,
        value,
    });

    return Promise.all(promises.map(p => (
        p.then(successHandler).catch(errorHandler)
    ))).then(() => results)
}

export default PromiseCount;