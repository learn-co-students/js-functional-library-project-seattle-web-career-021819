fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let i=0; i < collection.length; i++){
        callback(collection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let results = []
      for(let i=0; i < collection.length; i++){
        let result = callback(collection[i])
        results.push(result)
      }
      return results
    },

    reduce: function(collection, callback, initial) {
      let result = 0
      if (initial !== undefined) {
          result = initial
          for (let i = 0; i < collection.length; i++) {
            let next = collection[i]
            result = callback(result, next)
          }
      } else {
        result = collection[0]
        for (let i = 1; i < collection.length; i++) {
          let next = collection[i]
          result = callback(result, next)
      }
    }
    return result
  },

    find: function(collection, callback) {
      for(i = 0; i<collection.length; i++){
        let item = callback(collection[i])
        if (item){
          return collection[i]
        }
      }
    },

    filter: function(collection, callback) {
      let results = []
      for(i = 0; i<collection.length; i++){
        let item = callback(collection[i])
        if (item){
          results.push(collection[i])
        }
      }
      return results
    },

    size: function(collection) {
        return collection.length
    },

    first: function(collection, n) {
      if(n !== undefined){
       return collection.slice(0,n)
      } else {
      return collection[0]
      }
    },

    last: function(collection, n) {
      if(n !== undefined){
       return collection.slice(-n)
      } else {
      return collection[collection.length-1]
      }
    },

    compact: function(collection) {
      let results = []
      for(let i = 0; i < collection.length; i++){
        if(collection[i]){
          results.push(collection[i])
        }
      }
      return results
    },

    sortBy: function(collection, callback) {
        const newArr = [...collection]
        return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
        })
    },


    flatten: function(collection, shallow) {
      if(shallow){
        return collection.flat()
      } else {
        return collection.flat(2000000000)
      }
    },

    uniq: function(collection) {
      let results = []

    },

  

    giveMeMore: function() {
      return true
    },


  }
})()

fi.libraryMethod()
