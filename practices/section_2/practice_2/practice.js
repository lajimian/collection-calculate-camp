function count_same_elements(collection) {
  //在这里写入代码
  var result=[];
  var unrepeat=[];

  unrepeat.push(collection[0].replace(/[^a-z]+/ig,""));

  for (var i = 1; i < collection.length; i++) {
    for (var j = 0; j < unrepeat.length; j++)
    { if (unrepeat[j] == collection[i].replace(/[^a-z]+/ig,""))
      break;
      if(j==unrepeat.length-1)
        unrepeat.push(collection[i].replace(/[^a-z]+/ig,""));
    }
  }
  for(var i=0;i<unrepeat.length;i++) {
    var count = 0;
    for (j = 0; j < collection.length; j++)
    {
      if (collection[j].replace(/[^a-z]+/ig,"")==collection[j]&&collection[j]==unrepeat[i])
        count++;
      else if(collection[j].replace(/[^a-z]+/ig,"")==unrepeat[i])
        count+=Number(collection[j].replace(/[^0-9]+/ig,""))
    }
    var object={key:unrepeat[i],count:count};
    result.push(object);
  }
  return result;
}

module.exports = count_same_elements;
