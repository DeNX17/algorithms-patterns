const arr = [4, 8, 3, 0, 1, 5, 9, 8, 8, 1, 8, 3, 4, 6]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr.pop()

  const less = arr.filter((item) => item <= pivot)
  const greater = arr.filter((item) => item > pivot)

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
