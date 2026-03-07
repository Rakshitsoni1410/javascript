var student = /** @class */ (function () {
    function student(username, age) {
        this.username = username;
        this.age = age;
    }
    student.prototype.display = function () {
        console.log("Name: ".concat(this.username, ", Age: ").concat(this.age));
    };
    return student;
}());
var student1 = new student("Alice", 20);
student1.display();
