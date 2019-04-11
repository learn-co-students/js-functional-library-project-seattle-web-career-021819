fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(col, cb) {
      for(let i=0; i<col.length; i++){
        cb(col[i])
      }
      return col;
    },
    map: function(col, cb) {
      let results=[];
      for(let i=0; i<col.length; i++){
        let result=cb(col[i])
        results.push(result);
      }
      return results;
    },

    reduce: function(col, cb, initial){

      let acc=initial || col[0]

      if (acc===col[0]){
        for(let i=1;i<col.length;i++){
          let next=col[i]
          acc=cb(acc,next)   
        }
        return acc;
      }else{
        for(let i=0;i<col.length;i++){
          let next=col[i]
          acc=cb(acc,next)   
        }
        return acc;
      }    
    },
    
    find: function(collection, predicate){
      for(let i=0; i<collection.length;i++){
        if(predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined;  
    },

    filter: function(col, predicate){
      let results=[];
      for(let i=0; i<col.length; i++){
        if(predicate(col[i])){
          results.push(col[i]);
        }
      }
      return results;
    },

    size: function(col){
      if(col.constructor === Array){
        return col.length
      }else{
        return Object.keys(col).length
      }  
    },

    first: function(col, num=0){
      if (num===0){
        return col[0]
      }else{
        return col.slice(0,num)
      }
    },

    last: function(col, num=0){
      if (num===0){
        return col[col.length-1]
      }else{
        return col.slice(-num)
      }
  },

  compact: function(col) {
    let results=[];
    for(let i=0; i<col.length; i++){
      if(col[i]){
        results.push(col[i]);
      }
    }
    return results;
  },

  sortBy: function(col, cb) {
    return col.sort(cb)
  },

  flatten: function(arr, shallow=false){
      const flat = [];
      arr.forEach(item => {
        if (Array.isArray(item)) {
          flat.push(...flatten(item));
        } else {
          flat.push(item);
        }
      });
      return flat;
    }
  




}


})()

fi.libraryMethod()
