const PromiseCount = async promises => {
    const results = [];

    const successHandler = value => results.push({
        success: true,
        value,
    });

    const errorHandler = value => results.push({
        success: false,
        value,
    });

    await Promise.all(promises.map(p => (
        p.then(successHandler).catch(errorHandler)
    )));

    return results;
}

export default PromiseCount;