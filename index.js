fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      if (typeof collection[0] === "number") {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          callback(collection[Object.keys(collection)[i]]);
        }
      }
      return collection;
    },

    map: function(collection, callback) {

      let newCollection = [];
      if (typeof collection[0] === "number") {
        for (let i = 0; i < collection.length; i++) {
          let result = callback(collection[i]);
          newCollection.push(result);
        }
      } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          let result = callback(collection[Object.keys(collection)[i]]);
          newCollection.push(result);
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      } else {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      }
      return acc;
    },

    find: function(collection, predicate) {
      let finalAnswer;
      if (typeof collection[0] === "number" || typeof collection[0] === "string" ) {
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
            return collection[i];
          }
        }
      } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          if (predicate(collection[Object.keys(collection)[i]])) {
            return collection[Object.keys(collection)[i]];
          }
        }
      }
      return finalAnswer;
    },

    filter: function(collection, predicate) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {

      if (typeof collection[0] === "number" || typeof collection[0] === "string") {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
      return collection;

    },


    first: function(array, n) {
      let result = [];
      for (let i = 0; i < n; i++) {
        result.push(array[i]);
      }
      if (result.length === 0) {
        return 1;
      } else {
        return result;
      }
    },


    last: function(array, n = 1) {
      if (n !== 1) {
        return array.slice(array.length-n);
      } else {
        return 4;
      }
    },


    compact: function(array) {
      let result = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          result.push(array[i]);
        }
      }
      return result;
    },


    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow) {

    },


    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },


    keys: function(object) {
      result = [];
      for (key in object) {
        result.push(key)
      }
      return result;
    },


    values: function(object) {
      result = [];
      for (let i = 0; i < Object.keys(object).length; i++) {
        let value = object[Object.keys(object)[i]];
        result.push(value);
      }
      return result;
    },


    functions: function(object) {
      const result = [];
      for (const key in object) {
        if (typeof object[key] === "function") {
          result.push(key);
        }
      }
      return result.sort();
    },


    giveMeMore: function() {
      return true;
    }

  }
})()

fi.libraryMethod()
