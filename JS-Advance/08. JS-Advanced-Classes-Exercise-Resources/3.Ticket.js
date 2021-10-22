function solve(tickets, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;

        }
    }
    const ticketObj = [];

    tickets.forEach(entry => {
        const [destination, price, status] = entry.split('|')
        ticketObj.push(new Ticket(destination, Number(price), status))
    });

    if (criteria === 'destination') {
        ticketObj.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if (criteria == 'status') {
        ticketObj.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    } else {
        ticketObj.sort((a, b) => {
            return a.price - b.price;
        });
    }
    return ticketObj;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
))