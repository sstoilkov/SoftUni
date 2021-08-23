function solver(arr) {
    let cats = [];

    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let name = catData[0];
        let age = catData[1];
        cats.push(new Cat(name, age));

    }

    for (let i = 0; i < cats.length; i ++){
        cats[i].meow();
    }
}

solver(['Mellow 2', 'Tom 5']);