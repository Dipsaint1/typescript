const echo = <T>(arg: T): T => arg;

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]){
  let result = {} as Pick<T, K>;
  // for (const key of keys){
  //   if(key in obj){
  //     // result[key] = obj[key];
  //   }
  // }
}

const language = {
  name: "TypeScript",
  age: 8,
  extensions: ['ts', 'tsx']
}
pickObjectKeys(language, ['age', 'extensions'])

const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions', 'name']);


/////////////////////////////////////////////////////////////////////

const isObject = <T>(arg: T): boolean => {
  return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};

console.log(isObject(true));
console.log(isObject('John'));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'John' }));
console.log(isObject(null));


const isTrue = <T>( arg: T ): { arg: T, is: boolean } => {
  // Array
  if(Array.isArray(arg) && !arg.length){
    return { arg, is: false }
  }
  // Object
  //  Ensure that 'arg' is not a key if 'arg' is an object
  if(isObject(arg) && !Object.keys(arg as keyof T).length){
    return { arg, is: false }
  }

  // turn 'is' into a true or false value instead of 0 and 1 by flipping
  return { arg, is: !!arg }
}

isTrue({ name: 'John' });

///////////////////////////////////////////////////////////////////////

interface BoolCheck<T>{
  value: T,
  is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  // Array
  if(Array.isArray(arg) && !arg.length){
    return { value: arg, is: false }
  }
  // Object
  //  Ensure that 'arg' is not a key if 'arg' is an object
  if(isObject(arg) && !Object.keys(arg as keyof T).length){
    return { value: arg, is: false }
  }

  // turn 'is' into a true or false value instead of 0 and 1 by flipping
  return { value: arg, is: !!arg }
}


///////////////////////////////////////////////////////////////////////
interface HasID{
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
}


console.log(processUser({id: 1, name: 'Dave'}));
// console.log(processUser({name: 'Dave'}));

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key]);
}

const userArray = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

console.log(getUsersProperty(userArray, 'username'));


// ///////////////////////////////
// Generics in a class
class stateObject<T>{
  private data: T;

  constructor(value: T){
    this.data = value
  }

  get state() : T {
    return this.data
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new stateObject<string>('John');
console.log(store.state);
store.state = 'Dave';

const myState = new stateObject<(string|number|boolean)[]>([15]);
myState.state = (['Dave', 42, true]);
console.log(myState.state);

/////////////////////////////////////////////////////////////////////////

// Create a generic function
interface GenericIdentityFn{
  <T>(arg: T): T;
}

function identity<T>(arg: T): T{
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
console.log(myIdentity({name: 'Grace'}));

// Let the generic parameter to be a parameter of the whole interface
interface GenericIdentityFn1<T>{
  (arg: T): T
}

function identity1<T>(arg: T): T {
  return arg;
}

let myIdentity1: GenericIdentityFn1<object> = identity1;
console.log(myIdentity1({name: 'Grace'}));
let myIdentity1_: GenericIdentityFn1<number> = identity1;
console.log(myIdentity1_(20));
let myIdentity1__: GenericIdentityFn1<string> = identity1;
console.log(myIdentity1__('John'));
let myIdentity1___: GenericIdentityFn1<boolean> = identity1;
console.log(myIdentity1___(true));


//*********************** Generic Classes *******************************//
/** A class definition with a generic parameter */

class Queue<T>{
  data:T[]= [];

  push(item: T){
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(0);
queue.push(43434)
console.log(queue.data);

// Another Example 

function reverse<T>(items: T[]): T[]{
  let return_items = [];

  for(let i= items.length - 1; i >= 0; i--){
    return_items.push(items[i])
  }
  return return_items;
}

let sample = [0];
console.log(reverse(sample));
