function city(info){

    for(let cities of Object.keys(info)){
        console.log(`${cities} -> ${info[cities]}`)
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"}
);