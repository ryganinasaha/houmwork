const INIT_CARS = [{
    id: 1,
    name: 'Lada 2106',
    color: 'red',
    year: 2000,
    price: 500,
    currency: 'RUB'
},
{
    id: 2,
    name: 'Lada Kalina',
    color: 'black',
    year: 2019,
    price: 50000,
    currency: 'RUB'
}]


class Cars {
    //initCars -массив предустановленных машин
    constructor(initCars = []) {
        this.list = initCars
    }
     getCars() {
        return this.list
    }
    getCar(id) {
        return this.list.find(item => item.id === id)
    }
    addCar(newCar) {
        newCar.id = this.generateUniqId()
        this.list.push(newCar)
        return newCar.id
    }
    
    generateUniqId() {
        let max = 0
        for (let i = 0; i< this.list.length; i++){
            if (this.list[i].id > max){
                max = this.list[i].id
            }
        }
        return max + 1
    }
    replaceCar(newCar) {
        for (let i = 0; i < this.list.length; i++){
            if (this.list[i].id === newCar.id){
                this.list[i] = newCar
            }
        }
    }
    updateCar(id, newCar) {
        for (let i = 0; i < this.list.length; i++){
            if (this.list[i].id === id){
                this.list[i] = Object.assign(this.list[i], newCar)
            }
        }
    }
    deleteCar(id) {
        this.list = this.list.filter(item => item.id !== id)
    }
    serchByName(name) {
        return this.list.filter(item => {
            const itemNameLower = item.name.toLowerCars()
            const nameLower = name.toLowerCars()

            return itemNameLower.includes(nameLower)
        })
    }
}

const cars = new Cars(INIT_CARS)

cars.addCar({
    name: 'Reno Daster',
    color: 'pinл',
    year: 2020,
    price: 60000,
    currency: 'RUB'
})
cars.deleteCar(2)


console.log(cars.getCars())
console.log(cars.getCar(2))

/*


function init(initCars) {
    cars = initCars
}
 

 
function 

function 
 
function reset() {
    cars.length = 0
}





module.exports = {
    getCars,
    getCar,
    addCar,
    deleteCar,
    updateCar,
    reset,
    init
};
    
*/
