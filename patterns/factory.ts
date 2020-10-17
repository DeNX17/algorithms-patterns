interface Animal {
    name: string
    say: () => string
}

abstract class CreatorAnimal {
    public abstract createAnimal(): Animal
}

class DogCreator extends CreatorAnimal {
    public createAnimal(): Dog {
        return new Dog()
    }
}

class CatCreator extends CreatorAnimal {
    public createAnimal(): Cat {
        return new Cat()
    }
}

class Dog implements Animal {
    public name: string
    public say(): string {
        return "Gav"
    }
}

class Cat implements Animal {
    public name: string
    public say(): string {
        return "Meow"
    }
}