fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, cb) {
      for (let i = 0; i < arr.length; i++){
        cb(arr[i])
      }
      return arr;
    },

    map: function(arr, cb) {
      let results = [];
      for (let i = 0; i < arr.length; i++){
      let item = cb(arr[i])
      results.push(item)
    }
    return results;
    },

    reduce: function(collection, cb, acc) {
      let result = acc || 0;
      for (let i = 0; i < collection.length; i++) {
        let next = collection[i]
        result = cb(result, next)
      }
      return result;
    },

    find: function(arr, predicate){
      for (let i = 0; i < arr.length; i++){
      if (predicate(arr[i])){
        return arr[i]
        }
      }
    },

    filter: function(collection, predicate){
      let arr = []
      for (let i = 0; i < collection.length; i++){
      if (predicate(collection[i])){
        arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(collection){
      let counter = 0;
      for (let i = 0; i < collection.length; i++){
        counter++
      }
      return counter
    },

    first: function(arr, n=0) {
      if (n===0){
        return arr[0]
      } else {
        return arr.splice(0, n)
      }
    },

    last: function(arr, n=0) {
       n = n * -1
        if (n){
          return arr.splice(n)
        } else {
          return arr[arr.length-1]
        }
      },

    compact: function(arr) {
      let newArray = [];
      for (let i=0; i < arr.length; i++){
        if(arr[i]){
          newArray.push(arr[i]);
        }
      }
      return newArray;
    }

  }
})()

fi.libraryMethod()
