function solver(year1, month1, day1) {
    let date = new Date(year1, month1, day1 -1)
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
    console.log(`${year}-${month}-${day}`)
}

solver(2016, 9 , 30)