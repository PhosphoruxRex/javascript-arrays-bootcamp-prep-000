var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  arr = arr.unshift(ele)
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  return arr.unshift(ele)
}

function addElementToEndOfArray(arr, ele) {
  arr = arr.push(ele)
  return arr
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  return arr.push(ele)
}
