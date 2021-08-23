function Inventory(list) {

    let registerOfHeroes = [];

    for (command of list) {
        let tokens = command.split(' / ')
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let heroItems = tokens[2];

        let heroObject = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        registerOfHeroes.push(heroObject)

    }
    let sortedHeroesregister = registerOfHeroes.sort((a, b) => a.level - b.level);

    for (hero of sortedHeroesregister) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items.sort((a,b) => a.localeCompare(b)).join(', ')}`);
    }
}


Inventory([
    "Hes / 1 / Desolator, Sentinel, Antara",
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword"
]);