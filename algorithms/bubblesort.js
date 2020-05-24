const array = [1, 5, 2, 3, 5, 87, 9, 0, 52, 34, 567, 6, 6, 6, 23]

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

console.log(bubbleSort(array))
