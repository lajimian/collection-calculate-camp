'use strict';
var calculate_average = function(collection){

  var sum=0;
  var count=0;
  var ave;

  for(var i=0;i<collection.length;i++)

    if((i+1)%2==0)
    {
      sum+=collection[i];
      count++;
    }
    ave=sum/count;
  return ave;


};
module.exports = calculate_average;
