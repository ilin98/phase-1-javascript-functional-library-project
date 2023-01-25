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

function myReduce(collection, cb, acc = 0) {
    let array = collection
    if (typeof collection === "object") {
       array = Object.values(collection)
    }
    let start = acc
    for (let i = 0; i < array.length; i++) {
        console.log(start)
        start += (cb(acc = collection, array[i], array))
        console.log(start)
    }
    return start
}
