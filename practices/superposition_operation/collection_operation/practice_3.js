'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var sum=0;

  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==1)
    {
      collection[i]=collection[i]*3+5;
      sum+=collection[i];
    }
  }


  return sum;
}

module.exports = hybrid_operation_to_uneven;

