import { v4 as uuid } from "uuid"
import * as readlineSync from 'readline-sync'


function testMe(name: string): void {
    console.log(name)
}

testMe('George Lopez')

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

let myUuid = uuid()
console.log(myUuid)



class UserClass implements User {
    id: string
    name: string
    cart: Item[]
  
    constructor(name: string) {
      this.id = uuid()
      this.name = name
      this.cart = []
    }
  }

class ItemClass implements Item {
    id: string
    name: string
    description: string
    price: number   
    quantity: number
  
    constructor(name: string, description: string, price: number) {
      this.id = uuid()
      this.name = name
      this.description = description
      this.price = price      
      this.quantity = 0
    }
  }

  interface User {
    id: string
    name: string
    cart: Item[]
  }

  interface Item {
    id: string
    name: string
    description: string
    price: number   
    quantity: number
  }

  function createUser(name: string): User {
    return new UserClass(name)
  }
  
  function createItem(name: string, description: string, price: number): Item {
    return new ItemClass(name, description, price)
  }
  
  function addToCart(item: Item, user: User, quantity: number): void {
    const existingItem = user.cart.find((cartItem) => cartItem.id === item.id)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    user.cart.push({ ...item, quantity })
  }
}
  
  function removeFromCart(item: Item, user: User, quantity: number): void {
    const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    user.cart[index].quantity -= quantity
    if (user.cart[index].quantity <= 0) {
      user.cart.splice(index)
    }
  }
}
  
  
  function cartTotal(user: User): string {
    const total = user.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    return total.toFixed(2)
  }
  
  function printCart(user: User): void {
    console.log('Items in the cart:')
    user.cart.forEach((item) => {
      console.log(`ID: ${item.id}, Name: ${item.name}, Price: $${item.price} * Qty: ${item.quantity}`)
    })
    console.log(`Total: $${cartTotal(user)}`)
  }

  function getUserInput(prompt: string): string {
    return readlineSync.question(prompt)
  }
  
  function getUserInputNumber(prompt: string): number {
    return parseFloat(getUserInput(prompt))
  }

  const userName: string = getUserInput('Enter your name: ')
  const user: User = createUser(userName)

  const itemNameA: string = getUserInput('Enter name for Item A: ')
  const itemDescriptionA: string = getUserInput('Enter description for Item A: ')
  const itemPriceA: number = getUserInputNumber('Enter price for Item A: $')
  const quantityA: number = getUserInputNumber(`Enter quantity for ${itemNameA}: `)
  const itemA: Item = createItem(itemNameA, itemDescriptionA, itemPriceA)

  const itemNameB: string = getUserInput('Enter name for Item B: ')
  const itemDescriptionB: string = getUserInput('Enter description for Item B: ')
  const itemPriceB: number = getUserInputNumber('Enter price for Item B: $')
  const quantityB: number = getUserInputNumber(`Enter quantity for ${itemNameB}: `)
  const itemB: Item = createItem(itemNameB, itemDescriptionB, itemPriceB)

  const itemNameC: string = getUserInput('Enter name for Item C: ')
  const itemDescriptionC: string = getUserInput('Enter description for Item C: ')
  const itemPriceC: number = getUserInputNumber('Enter price for Item C: $')
  const quantityC: number = getUserInputNumber(`Enter quantity for ${itemNameC}: `)
  const itemC: Item = createItem(itemNameC, itemDescriptionC, itemPriceC)

addToCart(itemA, user, quantityA)
addToCart(itemB, user, quantityB)
addToCart(itemC, user, quantityC)

printCart(user)

const itemToRemoveA: Item = user.cart[0]
const quantityToRemoveA: number = getUserInputNumber(`Enter quantity to remove for ${itemToRemoveA.name}: `)
removeFromCart(itemToRemoveA, user, quantityToRemoveA)

printCart(user)

const itemToRemoveB: Item = user.cart[1]
const quantityToRemoveB: number = getUserInputNumber(`Enter quantity to remove for ${itemToRemoveB.name}: `)
removeFromCart(itemToRemoveB, user, quantityToRemoveB)

printCart(user)

const itemToRemoveC: Item = user.cart[2]
const quantityToRemoveC: number = getUserInputNumber(`Enter quantity to remove for ${itemToRemoveC.name}: `)
removeFromCart(itemToRemoveC, user, quantityToRemoveC)

printCart(user)