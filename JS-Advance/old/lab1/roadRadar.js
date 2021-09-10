function solver(speed, area) {

    let areaLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    if (areaLimits[area] >= speed) {
        console.log(`Driving ${speed} km/h in a ${areaLimits[area]} zone`);
    } else if (areaLimits[area] < speed && (speed - areaLimits[area]) <= 20) {
        console.log(`The speed is ${speed - areaLimits[area]} km/h faster than the allowed speed of ${areaLimits[area]} - speeding`);
    } else if (areaLimits[area] < speed && (speed - areaLimits[area]) > 20 && speed && (speed - areaLimits[area]) <= 40) {
        console.log(`The speed is ${speed - areaLimits[area]} km/h faster than the allowed speed of ${areaLimits[area]} - excessive speeding`);
    } else {
        console.log(`The speed is ${speed - areaLimits[area]} km/h faster than the allowed speed of ${areaLimits[area]} - reckless driving`);
    }
}

solver(120,
    `interstate`)