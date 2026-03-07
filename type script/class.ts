class student {
     username: string ;
     age: number;

    constructor(
     username: string,
    age: number) {
        this.username = username;
        this.age = age;
    }
    display(): void {
        console.log(`Name: ${this.username}, Age: ${this.age}`);
    }

}
let student1 = new student("Alice", 20);
student1.display();