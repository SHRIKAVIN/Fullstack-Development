class ContactManager {
    constructor() {
        this.contacts = [];
    }

    addContact(name, phone) {
        this.contacts.push({ name, phone });
        console.log(`Contact added: ${name}, ${phone}`);
    }

    removeContact(name) {
        const index = this.contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact removed: ${name}`);
        } else {
            console.log(`Contact not found: ${name}`);
        }
    }

    searchContacts(query) {
        const results = this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(`Search results for "${query}":`, results);
    }
}

const manager = new ContactManager();

manager.addContact("Bob", "987-654-3210");
manager.addContact("Charlie", "555-555-5555");

manager.searchContacts("bo");

manager.removeContact("Alice");

manager.searchContacts("Alice");
