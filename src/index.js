
exports.min = function min (array) {    
  return (Array.isArray(array) && array.length ) ? Math.min(...array) : 0;
}

exports.max = function max (array) {
  return (Array.isArray(array) && array.length ) ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
  return (Array.isArray(array) && array.length ) ? calcAvg(array) : 0;  
}

function calcAvg(array){
    const sum = array.reduce((a, b) => a + b, 0);
    return (sum / array.length) || 0;
}
