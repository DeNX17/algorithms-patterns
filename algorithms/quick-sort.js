export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr.pop()

  const less = arr.filter((item) => item <= pivot)
  const greater = arr.filter((item) => item > pivot)

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

