function solver(steps, stepLong, speed) {
    let distance = steps * stepLong / 1000
    additionalTime = 0;
    for (let i = 1; i < distance / 0.5; i++) {
        additionalTime += 1;
    }
    additionalTime *= 60;
    let time = distance / speed;
    let timeInSec = time * 3600 + additionalTime;
    let hours = 0;
    let minutes = 0;
    while (timeInSec >= 60) {
        timeInSec = timeInSec - 60;
        minutes++;
        if (minutes >= 60) {
            minutes = minutes - 60;
            hours++;
        }
    }
    timeInSec = Math.round(timeInSec)
    function padLeadingZeros(num) {
        var s = num+"";
        while (s.length < 2) s = "0" + s;
        return s;
    }
    console.log(`${padLeadingZeros(hours)}:${padLeadingZeros(minutes)}:${padLeadingZeros(timeInSec)}`)
}

solver(4000, 0.60, 5)