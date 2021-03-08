
exports.min = function min (array = [0]) {
    
  return array ? array.reduce((a, b) => b > a ? a : b, 0) : 0;
}

exports.max = function max (array = [0]) {
  return array ? array.reduce((a, b) => b > a ? b : a, 0) : 0;
}

exports.avg = function avg (array = [0]) {
  return array.length > 0 ? array.reduce((a, b) => (a + b), 0) / array.length : 0;
}
