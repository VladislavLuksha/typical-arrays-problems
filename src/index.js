exports.min = function min(array) {
    let minElement=0;
    if(!(Array.isArray(array)) || array.length === 0) return 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minElement) {
            minElement = array[i];
        }
    }
    return minElement;
};

exports.max = function max(array) {
    let maxElement=0;
    if(!(Array.isArray(array)) || array.length === 0) return 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = array[i];
        }
    }
    return maxElement;
};

exports.avg = function avg(array) {
    let averageBetweenElement = 0;
    if(!(Array.isArray(array)) || array.length === 0) return 0;
    for (let i = 0; i < array.length; i++) {
        averageBetweenElement += array[i];
    }
    return averageBetweenElement / array.length;
};
