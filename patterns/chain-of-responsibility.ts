interface Handler {
    handle: (request: any) => any
    setNext: (handle: Handler) => Handler
}

abstract class AbstractHandler implements Handler {
    private nextHandle: Handler

    public setNext(handle: Handler): Handler {
        this.nextHandle = handle
        return handle
    }

    public handle(request: any): any {
        if (!this.nextHandle) {
            return this.nextHandle.handle(request)
        }
    }
}

class Increment extends AbstractHandler {
    public handle(request: any): any {
        if (request === 0) {
            return 1
        }

        return super.handle(request)
    }
}

const inst1 = new Increment()
const inst2 = new Increment()

const result = inst1.setNext(inst2)

console.log(result.handle(0))