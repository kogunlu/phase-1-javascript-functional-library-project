function myEach(collection, cb){
    let arrayOfObj = []

    if(Array.isArray(collection)){
       arrayOfObj = collection
    }else{
      arrayOfObj = Object.values(collection)
    }

    for(let i = 0; i < arrayOfObj.length; i++){
        cb(arrayOfObj[i])

    }
return collection
}

// myEach([1, 2, 3], alert);
// myEach({one: 1, two: 2, three: 3}, alert);


function myMap(collection, cb){
    let arrayOfObj = []
    let newArrayOfObj = []

    if(Array.isArray(collection)){
       arrayOfObj = collection
    }else{
      arrayOfObj = Object.values(collection)
    }

    for(let i = 0; i < arrayOfObj.length; i++){
        newArrayOfObj.push(cb(arrayOfObj[i]))
    }

    return newArrayOfObj
}

// console.log(myMap([1, 2, 3], function(num){ return num * 3; }))
// console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }))

function myReduce(collection, cb, acc){
    let arrayOfObj = []

    if(Array.isArray(collection)){
       arrayOfObj = collection
    }else{
      arrayOfObj = Object.values(collection)
    }

    if(!acc){
        acc = arrayOfObj[0]
        arrayOfObj = arrayOfObj.slice(1) 
    }

    console.log('starter => ' +acc)
    console.log('our array => ' + arrayOfObj)
 
    for(let i = 0; i < arrayOfObj.length; i++){
        acc = cb(acc, arrayOfObj[i], arrayOfObj)
    }
    return acc
}


// console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10))
// console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; }))

function myFind(collection, predicate){
    let arrayOfObj = []

    if(Array.isArray(collection)){
       arrayOfObj = collection
    }else{
      arrayOfObj = Object.values(collection)
    }

    let i = 0
    let wantedNumber

    while(i < arrayOfObj.length){
        if(predicate(arrayOfObj[i])){
            wantedNumber = arrayOfObj[i]
            i = arrayOfObj.length
        }else{
            i++
        }
    }
    return wantedNumber
}

// console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
// console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }))

function myFilter(collection, predicate){
    let arrayOfObj = []
    let newArrayOfObj = []

    if(Array.isArray(collection)){
       arrayOfObj = collection
    }else{
      arrayOfObj = Object.values(collection)
    }

    for(let i = 0; i < arrayOfObj.length; i++){
        if(predicate(arrayOfObj[i])){
            newArrayOfObj.push(arrayOfObj[i])
        }
    }

    return newArrayOfObj
}

// console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
// console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }))

function mySize(collection){
    let arrayOfObj = []

    if(Array.isArray(collection)){
       arrayOfObj = collection
    }else{
      arrayOfObj = Object.values(collection)
    }

    return arrayOfObj.length
}

// console.log(mySize({one: 1, two: 2, three: 3}))
// console.log(mySize([]))

function myFirst(array, int){
    const newArray = []

    if(!int){
        return array[0]
    }else{
        for(let i = 0; i < int; i++){
            newArray.push(array[i])
        }
        return newArray
    }
}

// console.log(myFirst([5, 4, 3, 2, 1]))
// console.log(myFirst([5, 4, 3, 2, 1], 3))

function myLast(array, int){
    const newArray = []

    if(!int){
        return array[array.length-1]
    }else{
        for(let i = array.length-int; i < array.length; i++){
            newArray.push(array[i])
        }
        return newArray
    }
}

// console.log(myLast([5, 4, 3, 2, 1]))
// console.log(myLast([5, 4, 3, 2, 1], 3))

function myKeys(object){
    return Object.keys(object)
}

// console.log(myKeys({one: 1, two: 2, three: 3}))

function myValues(object){
    return Object.values(object)
}
// console.log(myValues({one: 1, two: 2, three: 3}))
