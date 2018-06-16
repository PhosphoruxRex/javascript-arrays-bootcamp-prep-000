var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  arr = arr.unshift(ele)
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  return arr.unshift(ele)
}
