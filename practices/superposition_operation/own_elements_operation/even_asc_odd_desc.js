'use strict';
var even_asc_odd_desc = function(collection){
  var result=[];
  var result_ou=[];
  var result_ji=[];

  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%2==0)
      result_ou.push(collection[i]);
    else
      result_ji.push(collection[i]);
  }
  result_ou=result_ou.sort(function(a,b){return a-b;});
  result_ji=result_ji.sort(function(a,b){return b-a;});

  for(var i=0;i<result_ou.length;i++)
    result.push(result_ou[i]);

  for(var i=0;i<result_ji.length;i++)
    result.push(result_ji[i]);







  return result;

};
module.exports = even_asc_odd_desc;
