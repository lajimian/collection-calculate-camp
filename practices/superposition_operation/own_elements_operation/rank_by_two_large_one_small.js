'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var result=[];

  collection.sort(function (a,b) {return a-b;});

  for(var i=0;i<collection.length;i++)
  {
    if(i%3==0&&i+2<collection.length)
    {
      for(var j=i+1;j<=i+2&&j<collection.length;j++)
        result.push(collection[j]);
      result.push(collection[i]);
    }
  }
  if(collection.length!=result.length)

    for(var i=result.length;i<collection.length;i++)
      result.push(collection[i]);




  return result;
}
module.exports = rank_by_two_large_one_small;
