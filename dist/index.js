"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const readlineSync = __importStar(require("readline-sync"));
function testMe(name) {
    console.log(name);
}
testMe('George Lopez');
// noImplicitAny
// set to true
// function implicitAny(id:number):number {
//     return id
// }
// noImplicitReturns
// set to true
// function noImplicitReturns(name:string):string{
//     console.log(name)
// }
// noUnusedlocals
// set to true
// function noUnusedlocals(): void {
//     let unused = 5
//     console.log("yolo")
// }
// noUnusedParameters
// set to true
// function noUnusedParameters(id: number):void {
//     console.log("youre a goofy goober")
// }
// strictNullChecks
// set to true
// function strictNullChecks(id: number): void {
//     console.log(id)
// }
// strictNullChecks(null)
// allowUnreachebleCode
// set to false
// function unreachable(id: number): number {
//     while(typeof id === "number"){
//         // break
//     }
//     return id
// }
// noImplicitOverrides
// set to true
// class Father {
//     constructor(public age: number){}
//     playSmash():string{
//         return "Get rekt my son"
//     }
// }
// class Son extends Father {
//     override playSmash():string {
//         return "One day I shall defeat you, father, and regain my honor"
//     }
// }
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
class UserClass {
    constructor(name) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.cart = [];
    }
}
class ItemClass {
    constructor(name, description, price) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = 0;
    }
}
function createUser(name) {
    return new UserClass(name);
}
function createItem(name, description, price) {
    return new ItemClass(name, description, price);
}
function addToCart(item, user, quantity) {
    const existingItem = user.cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    }
    else {
        user.cart.push(Object.assign(Object.assign({}, item), { quantity }));
    }
}
function removeFromCart(item, user, quantity) {
    const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
        user.cart[index].quantity -= quantity;
        if (user.cart[index].quantity <= 0) {
            user.cart.splice(index);
        }
    }
}
function cartTotal(user) {
    const total = user.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return total.toFixed(2);
}
function printCart(user) {
    console.log('Items in the cart:');
    user.cart.forEach((item) => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Price: $${item.price} * Qty: ${item.quantity}`);
    });
    console.log(`Total: $${cartTotal(user)}`);
}
function getUserInput(prompt) {
    return readlineSync.question(prompt);
}
function getUserInputNumber(prompt) {
    return parseFloat(getUserInput(prompt));
}
const userName = getUserInput('Enter your name: ');
const user = createUser(userName);
const itemNameA = getUserInput('Enter name for Item A: ');
const itemDescriptionA = getUserInput('Enter description for Item A: ');
const itemPriceA = getUserInputNumber('Enter price for Item A: $');
const quantityA = getUserInputNumber(`Enter quantity for ${itemNameA}: `);
const itemA = createItem(itemNameA, itemDescriptionA, itemPriceA);
const itemNameB = getUserInput('Enter name for Item B: ');
const itemDescriptionB = getUserInput('Enter description for Item B: ');
const itemPriceB = getUserInputNumber('Enter price for Item B: $');
const quantityB = getUserInputNumber(`Enter quantity for ${itemNameB}: `);
const itemB = createItem(itemNameB, itemDescriptionB, itemPriceB);
const itemNameC = getUserInput('Enter name for Item C: ');
const itemDescriptionC = getUserInput('Enter description for Item C: ');
const itemPriceC = getUserInputNumber('Enter price for Item C: $');
const quantityC = getUserInputNumber(`Enter quantity for ${itemNameC}: `);
const itemC = createItem(itemNameC, itemDescriptionC, itemPriceC);
addToCart(itemA, user, quantityA);
addToCart(itemB, user, quantityB);
addToCart(itemC, user, quantityC);
printCart(user);
const itemToRemoveA = user.cart[0];
const quantityToRemoveA = getUserInputNumber(`Enter quantity to remove for ${itemToRemoveA.name}: `);
removeFromCart(itemToRemoveA, user, quantityToRemoveA);
printCart(user);
const itemToRemoveB = user.cart[1];
const quantityToRemoveB = getUserInputNumber(`Enter quantity to remove for ${itemToRemoveB.name}: `);
removeFromCart(itemToRemoveB, user, quantityToRemoveB);
printCart(user);
const itemToRemoveC = user.cart[2];
const quantityToRemoveC = getUserInputNumber(`Enter quantity to remove for ${itemToRemoveC.name}: `);
removeFromCart(itemToRemoveC, user, quantityToRemoveC);
printCart(user);
