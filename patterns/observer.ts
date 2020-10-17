interface Subject {
    attach(observer: Observer): void
    detach(observer: Observer): void
    notify(): void
}

interface Observer {
    update(subject: Subject): void
}

class ConcreteSubject implements Subject {
    public state: number

    private observers: Observer[] = []

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer)

        if (isExist) {
            throw new Error("Observer has been attached already")
        }

        this.observers.push(observer)
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)

        if (observerIndex === -1) {
            throw new Error("Nonexistent observer")
        }

        this.observers.splice(observerIndex, 1)
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject instanceof ConcreteSubject && subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}