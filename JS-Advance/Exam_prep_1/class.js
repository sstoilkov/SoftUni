class SummerCamp {
    constructor(organizer, location) {
        this.organizerName = organizer;
        this.locationPlace = location;
        this.price = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let priceArray = Object.keys(this.price)

        if (priceArray[0] !== condition && priceArray[1] !== condition && priceArray[2] !== condition) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.listOfParticipants.some(s => s.name == name)) {
            return `The ${name} is already registered at the camp.`
        }
        if (Number(this.price[condition]) > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        const person = this.listOfParticipants.find(s => s.name == name);
        if (person == undefined) {
            throw new Error (`The ${name} is not registered in the camp.`);
        }
        const index = this.listOfParticipants.indexOf(person);
        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`
    }
    timeToPlay(typeOfGame, ...participants) {

        if (typeOfGame == 'WaterBalloonFights') {
            let [participant1, participant2] = participants;
            const participant11 = this.listOfParticipants.find(s => s.name == participant1);
            const participant22 = this.listOfParticipants.find(s => s.name == participant2);

            if (participant11 == undefined || participant22 == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (participant11.condition !== participant22.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (participant11.power > participant22.power) {
                participant11.wins += 1;
                return `The ${participant11.name} is winner in the game ${typeOfGame}.`;
            } else if (participant11.power < participant22.power) {
                participant22.wins += 1;
                return `The ${participant22.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        }

        if (typeOfGame == 'Battleship') {
            const participant = this.listOfParticipants.find(s => s.name == participants);
            if (participant == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            participant.power += 20;

            return `The ${participant.name} successfully completed the game ${typeOfGame}.`

        }
    }
    toString() {
        let result = [`${this.organizerName} will take ${this.listOfParticipants.length} participants on camping to ${this.locationPlace}`];
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        .forEach(s => result.push(`${s.name} - ${s.condition} - ${s.power} - ${s.wins}`));
        
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.unregisterParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
