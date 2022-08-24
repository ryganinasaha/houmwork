class User {
    constructor(name, initSurname, initAge) {
        this.name = name,
        this.surname = initSurname,
        this.age = initAge
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }
    isadult() {
        return this.age >= 18
    }
    incrementAge(number) {
        this.age = this.age + number
    }
}

class Student extends User {
    constructor(name, initSurname, initAge) {
        super(name, initSurname, initAge)
        this.role = 'student'
    }
    getFullName() {
        const fullname = super.getFullName()
        return `${fullname}. Age: ${this.age}`
    }
    isadult() {
        return this.age >= 16
    }
    checkAccess() {
        if (!this.isadult()) {
            return 'доступ запрещен'
        }
        return 'ok'
    }
}

const user = new User('Nik', 'Lapshen', 32)
const student = new Student('sergei', 'Popov', 23)

console.log(user)
console.log(student)
console.log('fullname:', user.getFullName())
console.log(user.isadult())
user.incrementAge(1)
console.log(user.age)
console.log(student.isadult())
console.log(student.getFullName())
console.log(student.checkAccess())


function makeUser(name, surname, age) {
    const user3 = {
        name: name,
        surname: surname,
        age: age
    }
    return user3
}
console.log(makeUser('sara', 'kruglova', 20))

