const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const collectionToIterate = (collection instanceof Array) ? collection : Object.values(collection)
        for (let i = 0; i < collectionToIterate.length; i++) {
          callback(collectionToIterate[i])}
      return collection

    },

    map: function(collection, callback) {
      let newCollection = []
      const collectionToIterate = (collection instanceof Array) ? collection : Object.values(collection)
        for (let i = 0; i < collectionToIterate.length; i++) {
          newCollection.push(callback(collectionToIterate[i]))}
      return newCollection

    },

    reduce: function(collection, callback, startingPoint) {
      if (!startingPoint) {
        startingPoint = collection[0];
        collection = collection.slice(1);
      }

      let endPoint = startingPoint

      for (let i = 0; i < collection.length; i++) {
        endPoint = callback(endPoint, collection[i])
        console.log(endPoint)
      }
      return endPoint
    },

    find: function(collection, statement) {
      const collectionToIterate = (collection instanceof Array) ? collection : Object.values(collection)
        for (let i = 0; i < collectionToIterate.length; i++)
        if (statement(collectionToIterate[i])) {
          return collectionToIterate[i]
        }

        return undefined
    },

    filter: function(collection, statement) {
      let savedValues = []
      const collectionToIterate = (collection instanceof Array) ? collection : Object.values(collection)
        for (let i = 0; i < collectionToIterate.length; i++)
        if (statement(collectionToIterate[i])) {
          savedValues.push(collectionToIterate[i])
        }
        return savedValues
      },

      size: function(collection) {
        const collectionToCount = (collection instanceof Array) ? collection : Object.values(collection)
        return collectionToCount.length
      },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
