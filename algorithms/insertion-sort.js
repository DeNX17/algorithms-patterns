const array = [4, 6, 1, 23, 57, 9, 0, 6, 1, 3, 4, 68]

const insertionSort = (inputArr) => {
  let length = inputArr.length
  for (let i = 1; i < length; i++) {
    let key = inputArr[i]
    let j = i - 1
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j]
      j = j - 1
    }
    inputArr[j + 1] = key
  }
  return inputArr
}

console.log(insertionSort(array))
