import { bubbleSort } from "./bubblesort"
import { insertionSort } from "./insertion-sort"
import { mergeSort } from "./merge-sort";
import { quickSort } from "./quick-sort"
import { numberArray, sortedNumberArray } from "./source"

let inputArray, sortedArray

beforeEach(() => {
    inputArray = [...numberArray]
    sortedArray = [...sortedNumberArray]
})

describe('Bubble sort', () => {
    test("Check order", () => {
        expect(bubbleSort(inputArray)).toStrictEqual(sortedArray)
    })

    test("Empty array case", () => {
        expect(bubbleSort([])).toStrictEqual([])
    })
})

describe('Insertion sort', () => {
    test("Check order", () => {
        expect(insertionSort(inputArray)).toStrictEqual(sortedArray)
    })

    test("Empty array case", () => {
        expect(insertionSort([])).toStrictEqual([])
    })
})

describe('Quick sort', () => {
    test("Check order", () => {
        expect(quickSort(inputArray)).toStrictEqual(sortedArray)
    })

    test("Empty array case", () => {
        expect(quickSort([])).toStrictEqual([])
    })
})


describe('Merge sort', () => {
    test("Check order", () => {
        expect(mergeSort(inputArray)).toStrictEqual(sortedArray)
    })

    test("Empty array case", () => {
        expect(mergeSort(inputArray)).toStrictEqual(sortedArray)
    })
})
