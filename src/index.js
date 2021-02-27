
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix) {
        matrix.map((el,i) => {
        if(i%2) el.reverse();
      })
      return  [].concat(...matrix);
    } else return [];
}
