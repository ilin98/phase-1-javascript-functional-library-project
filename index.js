function myEach (collection, cb) {
    let array = collection
    if (typeof collection === "object") {
       array = Object.values(collection)
    }
    for (let i = 0; i < array.length; i++) {
        cb(array[i])
    }
    return collection
}
function myMap (collection, cb) {
    let array = collection
    let newArray = []
    if (typeof collection === "object") {
       array = Object.values(collection)
    }
    for (let i = 0; i < array.length; i++) {
        newArray.push(cb(array[i]))
    }
    return newArray
}

function myReduce(collection, cb, acc) {
    let newCollection = convert(collection)
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = (cb(acc, newCollection[i], newCollection))
    }
    return acc
}

function convert(collection) {
    if (typeof collection === "object") {
         collection = Object.values(collection)
    } else {
        collection.slice()
    }
    return collection
}

function myFind(collection, predicate) {
    let newCollection = convert(collection)
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            return newCollection[i]
        }
    }
}

function myFilter(collection, predicate) {
    let newCollection = convert(collection)
    let newArray = []
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            newArray.push(newCollection[i])
        }
    }
    return newArray
}

function mySize(collection) {
    let newCollection = convert(collection)
    return newCollection.length
}

function myFirst(array, num) {
    if (!num) {
        return array[0]
    } else {
    return array.slice(0, num)
    }
}

function myLast(array, num) {
    if (!num) {
        return array[array.length -1]
    } else {
        return array.slice(-num)
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}
