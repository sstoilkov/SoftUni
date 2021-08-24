const Contact = require("./models/Contact");

let contacts = [
	new Contact('Ivan', '+359881144488'),
	new Contact('John', '+359882144488'),
	new Contact('Marry', '+359877777791')
];

function getContact() {
	return contacts;
}

function addContact(name, number) {
	let contact = new Contact(name, number)
	contacts.push(contact)
}

module.exports = {
	getContact,
	addContact
}