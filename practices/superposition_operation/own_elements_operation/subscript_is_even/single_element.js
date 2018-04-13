'use strict';
var single_element = function(collection){
  var result=[];



  for(var i=1;i<collection.length;i+=2)
  {
    for(var j=1;j<collection.length;j+=2)
      if(i!=j&&collection[i]==collection[j])
        break;

    if(j>=collection.length)
      result.push(collection[i]);
  }



  return result;

};
module.exports = single_element;
