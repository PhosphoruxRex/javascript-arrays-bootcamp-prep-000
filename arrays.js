var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  return arr.unshift(ele)
}

function addElementToEndOfArray(arr, ele) {
  return [...arr, ele]
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  return arr.push(ele)
}

function accessElementInArray(arr, ind) {
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift()
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop()
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, -1)
}

// or maybe it really is iceCreams.length - 1
