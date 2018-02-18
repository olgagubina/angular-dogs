import { Injectable } from '@angular/core';
import { Dog } from './dogs/dog.model';

const DOGS:Array<Dog> = [
  {id:1, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21),  toggleClass:true},
  {id:2, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12), toggleClass:true},
  {id:3, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6), toggleClass:true},
  {id:4 ,name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 5), toggleClass:true},
  {id:5 ,name: 'Princess', weight: 65, birthDate: new Date(2017, 5, 4), toggleClass:true}
];

@Injectable()
export class DogService {
  dogs: Array<Dog> = DOGS;

  constructor() { }

  addADog(newDog:Dog) {  
    newDog.id = this.generateId();
    newDog.toggleClass  = true;
  	this.dogs.push(newDog);
  }

  getDogs() {
    return this.dogs;
  }

  editDog(id: Number, dog: Dog) {
    let updateDogIndex = this.dogs.findIndex((dog) => dog.id == id);
    this.dogs[updateDogIndex] = dog;
    console.log(this.dogs);
  }

  deleteADog(i) {
    this.dogs.splice(i,1);
  }

  generateId (): number {
  	return this.dogs[this.dogs.length - 1].id + 1;
  }
}
