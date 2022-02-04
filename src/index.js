


    module.exports = function towelSort (matrix) {
      if (matrix===undefined || matrix === []) return [];
      return matrix.reduce((acc,item,index)=>{
        if(index %2 === 0) {
          item.forEach(num=>acc.push(num))
        }
        else {
          item.reverse().forEach(num=>acc.push(num))
        }
        return acc;
      },[])
    }
    
    