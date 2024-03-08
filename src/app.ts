import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if (type.value === 'invoice'){
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values)
  }

  list.render(doc, type.value, 'end')
});

// Enums
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

  // with interfaces
  interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T;
  }
  
  const docOne: Resource<object> = {
    uid: 1, 
    resourceType: ResourceType.BOOK,
    data: { name: 'mario' }
  };
  const docTwo: Resource<object> = {
    uid: 10, 
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
  };

// tuples

let arr = ['ryu', 25, true]
arr[0] = false
arr[1] = 'yoshi'
arr = [30, false, 'yoshi']

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken'
tup[1] = 30

let student: [string, number]
student = ['chun-li', 223423]

