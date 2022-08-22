const car = require('./car');


beforeEach(() => {

    car.init([
        {
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
        }
    ])
})

describe('getCars', () =>{
    test('должен вернуть массив машин', () => {
        expect(car.getCars()).toEqual([
            {
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
            }
        ])
    })
})

describe('getCar', () => {
    test('получение одного объекта по id', () => {
        expect(car.getCar(2)).toEqual(
            {
                id: 2,
                name: 'Lada Kalina',
                color: 'black',
                year: 2019,
                price: 50000,
                currency: 'RUB'
            }
        ) 
    })
    test('должен вернуть undefined не существующем id', () => {
        expect(car.getCar(500)).toEqual(undefined)
    })
})

describe('addCar', () => {
    test('добовляет новый элемент в массив с уникальным id', () => {
        const newId = car.addCar({
            name: 'Reno Daster',
            color: 'pinл',
            year: 2020,
            price: 60000,
            currency: 'RUB'})
        expect(newId).toEqual(3)
        expect(car.getCar(newId)).toEqual({
            id: 3,
            name: 'Reno Daster',
            color: 'pinл',
            year: 2020,
            price: 60000,
            currency: 'RUB'
        })
    })
})

