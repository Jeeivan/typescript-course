// classes
// public is already default so anyone can change it
// if private you cannot change property you cannot access it outside of the class
// if readonly you can still access the property but you cannot change it
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
