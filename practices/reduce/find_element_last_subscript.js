'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for(var i=collection.length-1;i>=0;i--)
    if(collection[i]==element)
    {
      return i;
      break;
    }

  if(i==-1)
    return  -1;
}

module.exports = calculate_elements_sum;
