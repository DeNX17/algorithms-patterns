class StringWorker {
    public reverse(string: string): string {
        return string.split("").reverse().join("")
    }

    public upperFirstChar(string: string): string {
        return string.split(" ").map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ")
    }
}

class NumberWorker {
    public transformToBigInt(number: number): BigInt {
        return BigInt(number)
    }

    public separateByComma(number: number): string {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

export class Facade {
    protected stringWorker: StringWorker;
    protected numberWorker: NumberWorker;

    constructor(stringWorker: StringWorker = null, numberWorker: NumberWorker = null) {
        this.stringWorker = stringWorker || new StringWorker()
        this.numberWorker = numberWorker || new NumberWorker()
    }

    public reverseString(string: string): string {
        return this.stringWorker.reverse(string)
    }

    public reverseAndUpperFirstChar(string: string): string {
        const upperedString = this.stringWorker.upperFirstChar(string)

        return this.stringWorker.reverse(upperedString)
    }
}

