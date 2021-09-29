function solver(input) {

    let result = [];
        input.forEach(e => {
        let [name, level, items] = e.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({name, level, items});
    });
    console.log(JSON.stringify(result));
}

solver(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)