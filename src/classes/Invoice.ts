import { HasFormatter } from '../interfaces/HasFormatter.js'


// classes
// public is already default so anyone can change it
// if private you cannot change property you cannot access it outside of the class
// if readonly you can still access the property but you cannot change it

export class Invoice implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){
    }
    
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}