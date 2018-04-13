'use strict';
var even_group_calculate_average = function(collection){
  var result=[];
  var ave_result=[];
  var count1=0,count2=0,count3=0;
  var result1=0,result2=0,result3=0;

  for(var i=0;i<collection.length;i++)
    if((i+1)%2==0&&collection[i]%2==0)
      result.push(collection[i]);

  if(result.length==0)
    ave_result.push(0);
  else
  {
    for(var i=0;i<result.length;i++)
    {
      if(result[i]<10)
      {
        count1++;
        result1+=result[i];
      }
      else if(result[i]<100)
      {
        count2++;
        result2+=result[i];
      }
      else
      {
        count3++;
        result3+=result[i];
      }
    }
    if(count1>0||count2>0)
    {
      ave_result.push(result1/count1);
      ave_result.push(result2/count2);
      ave_result.push(result3/count3);
    }
    else
      ave_result.push(result3/count3);


  }







  return ave_result;


};
module.exports = even_group_calculate_average;
