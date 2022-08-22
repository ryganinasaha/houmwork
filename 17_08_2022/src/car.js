let cars = []

function getCars() {
    return cars
}

function getCar(id) {
    return cars.find(item => item.id === id)
}

function addCar(newCar) {
    newCar.id = generateUniqId()
    cars.push(newCar)
    return newCar.id
}
function deleteCar(id) {

}

function updateCar(id, car) {

}
 
function reset() {
    cars.length = 0
}

function init(initCars) {
    cars = initCars
}

function generateUniqId() {
    let max = 0
    for (let i = 0; i< cars.length; i++){
        if (cars[i].id > max){
            max = cars[i].id
        }
    }
    return max + 1
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
    

    