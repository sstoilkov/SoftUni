function solver(input) {
    let car = {};

    if (input.wheelsize) {
        let weelsize = input.wheelsize;
    }
    
    if (weelsize % 2 === 0) {
        weelsize -= 1;
    }
    car = {
        model: input.model,
        engine: {
            power: 90,
            volume: 1800
        },
        carriage: {
            type: input.carriage,
            color: input.color
        },
        wheelsize: [weelsize, weelsize, weelsize, weelsize]
    }

    if (input.power > 90 && input.power <= 120) {
        car.engine.power = 120;
        car.engine.volume = 2400;
    } else if (input.power > 120) {
        car.engine.power = 200;
        car.engine.volume = 3500;
    }
    console.log('yes')
    return car;

}

solver({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
)