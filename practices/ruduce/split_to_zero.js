'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result=[];

  while(number>interval)
  {
    result.push(number);
    number=Number((number-interval).toFixed(1));
  }
  if(number==interval)
  {
    result.push(number);
    result.push(0);
  }
  else
  {
    result.push(number);
    result.push(Number((number-interval).toFixed(1)));

  }


  return result;

}

module.exports = spilt_to_zero;
