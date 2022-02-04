
// You should implement your task here.

// module.exports = function towelSort (matrix) {
  function res (matrix) {
   

    
    
    module.exports = function towelSort (matrix) {
      return matrix.reduce((acc,el,i) =>{
        console.log(matrix)
        if(i %2 == 0) {
          console.log(el)
          el.forEach(element => acc.push(element))
        }else {
          el.reverse().forEach(element => acc.push(element))
          
        }
        return acc
      },[])
    }