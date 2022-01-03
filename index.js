

function myEach(collection, alert) {
    let array = [];
    let object = array
    for (array in collection) {
        alert(collection[array])
    }
    return collection
}
//Ask how to pass Object.values for this 

function myMap(collection, callback) {
    let array = [];
    let modifiedArray = array
    for (array in collection) {
        modifiedArray.push(callback(collection[array]))
    }
    return modifiedArray
}

function myReduce(collection, callback, acc) {
    let array = []
    let object = {}
    let copy = [...collection]
    acc = acc || copy.shift();
    for (array in copy) {
        acc = callback(acc, copy[array], copy, Object.values(object))
    }

    return acc
}
//Where do I add Object Value?

function myFind(collection, callback) {
    let array = [];
    for (array in collection) {
        let element = collection[array]
        if (callback(element)) {
            return element;
        }
    }
}

function myFilter(collection, callback) {
    let array = [6, 11, 5, 12, 17, 100, 9, 1, -8]
    let selectedArray = []
    for (array in collection) {
        let element = collection[array]
        if (callback(element)) {
            selectedArray.push(element)
        }
    }
    return selectedArray;
}

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst(collection, n = 1) {
    let count = 1;
    let array = [];

    for (let accessor in collection) {
        if (count <= n) {
            array.push(collection[accessor]);
            count++
        }
    }

    return array.length > 1 ? array : array[0]
}

function myLast(collection, n = 1) {
    let startingIndex = collection.length - n;

    return n > 1 ? collection.slice
        (startingIndex, collection.length) : collection[startingIndex]

}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}