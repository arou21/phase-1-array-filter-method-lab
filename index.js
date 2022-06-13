
// * Es2015 implementation 
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sara']
 function findMatching(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase())
        !== -1
    })
 }
console.log(findMatching(drivers, 'bo'))
console.log(findMatching(drivers, 'sa'))

function fuzzyMatch(arr, query) {
  return arr.filter (function (el) {
    return el.substring(0,2).toLowerCase().indexOf(query.toLowerCase())
        !== -1
})
}

function matchName(arrayOfObjects, val) {
  const reslut = arrayOfObjects.filter(object => object.name === val)
return reslut
}
