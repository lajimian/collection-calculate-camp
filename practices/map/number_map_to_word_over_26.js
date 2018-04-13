'use strict';
var number_map_to_word_over_26 = function(collection){
  var result=[];

  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]<=26)
      result.push(String.fromCharCode(collection[i]+96));
    else
      result.push(String.fromCharCode(97)+String.fromCharCode(collection[i]-26+96));
  }


  return result;
};

module.exports = number_map_to_word_over_26;
