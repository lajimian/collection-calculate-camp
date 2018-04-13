function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result=[];
  var unrepeat=[];

  unrepeat.push(collection_a[0]);

  for (var i = 1; i < collection_a.length; i++) {
    for (var j = 0; j < unrepeat.length; j++)
    { if (unrepeat[j] == collection_a[i])
      break;
      if(j==unrepeat.length-1)
        unrepeat.push(collection_a[i]);
    }
  }
  for(var i=0;i<unrepeat.length;i++) {
    var count = 0;
    for (j = 0; j < collection_a.length; j++)
      if (collection_a[j]==unrepeat[i])
        count++;
    var object={key:unrepeat[i],count:count};
    for(var k=0;k<object_b.value.length;k++)
      if(unrepeat[i]==object_b.value[k])
        object.count-=Math.floor(count/3);
    result.push(object);
  }
  return result;
}

module.exports = create_updated_collection;
