import { quickSort } from "../algorithms/quick-sort"

interface StrategySort {
    doSort: (data: number[]) => number[]
}

class ContextSort {
    private strategy: StrategySort;

    constructor(strategy: StrategySort) {
        this.strategy = strategy
    }

    public setStrategy(strategy: StrategySort) {
        this.strategy = strategy
    }
}

class SortNumber implements StrategySort {
    public doSort(data: number[]): number[] {
        return quickSort(data)
    }
}

export const sortContext = new ContextSort(new SortNumber())
