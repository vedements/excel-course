
//Objects
const person = {
   name: 'Vadim',
   age: 21,
   job: 'Fullstack'
}

const op = new Proxy(person,{
   get(target, prop){
      console.log('Getting prop',prop)
      return target[prop]
   },
   set(target, prop, value){
      if(prop in target)
      target[prop] = value
      else throw new Error('No prop field in target')
   },
   has(target, prop){
      return ['age', 'name', 'job'].includes(prop)
   },
   deleteProperty(target, prop){
      console.log('Deleting...', prop)
      delete target[prop]
      return true
   }
})

//Functions
const log = text => 'Log: ' + text


const fp = new Proxy(log. {
   apply(target, thisArg, args){
      console.log('Calling fn...')

      return target.apply(thisArg, args)
   }
})

//Classes

class Persone{
   constructor(name,age){
      this.name = name
      this.age = age
   }
}

const PersonProxy = new Proxy(Person, {
   construct(target, args){
      console.log('Construct...')

      return new target(...args)
   }
})

const p = new PersonProxy('Maxim',30)