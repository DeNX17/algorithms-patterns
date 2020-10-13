import { Singleton } from "./singleton"

describe('Pattern singleton', () => {
    test("Check same link", () => {
        const singleton1 = Singleton.getInstance()
        const singleton2 = Singleton.getInstance()

        expect(singleton1 === singleton2).toBe(true)
    })
})
