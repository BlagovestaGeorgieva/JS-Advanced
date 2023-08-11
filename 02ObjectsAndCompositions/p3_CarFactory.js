function carFactory(car) {

    let resultCar = {};
    resultCar.model = car.model;
    let engine = {};
    let carriage = {};
    let wheelsize = [];

    if (car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }

    resultCar.engine = engine;

    if (car.carriage === 'hatchback') {
        carriage.type = 'hatchback';
        carriage.color = car.color;
    } else {
        carriage.type = 'coupe';
        carriage.color = car.color;
    }

    resultCar.carriage = carriage;

    if (car.wheelsize % 2 === 0) {
        car.wheelsize = Math.trunc(car.wheelsize - 1);
    } else {
        car.wheelsize = Math.trunc(car.wheelsize);
    }

    for (let i = 0; i < 4; i++) {
        wheelsize.push(car.wheelsize)
    }

    resultCar.wheels = wheelsize;

    return resultCar;

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});