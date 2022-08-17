const car = require('./car');

test('car mast have 4 wheel', () => {
    expect(car.wheel).toBe(4)
});
