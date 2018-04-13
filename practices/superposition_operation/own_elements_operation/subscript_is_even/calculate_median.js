'use strict';
var calculate_median = function(collection){

  var count=0;
  var re_collection=[];

  for(var i=0;i<collection.length;i++)
    if((i+1)%2==0)
    {
      re_collection.push(collection[i]);
      count++;
    }

    var lowmid=re_collection[Math.floor((count-1)/2)];
    var highmid=re_collection[Math.ceil((count-1)/2)];

    var result=(lowmid+highmid)/2;
    return result;



};
module.exports = calculate_median;
