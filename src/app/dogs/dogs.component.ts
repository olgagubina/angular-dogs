import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from './dog.model';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any; 
  buttonContent:string="-";
  selectedDog: Dog = new Dog();

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();	
  }

  toggleDatePipe(dog){
    if(dog.toggleClass) {
      dog.toggleClass = false;
      this.buttonContent="-";
    }else {
      dog.toggleClass = true;
      this.buttonContent="+";
    }
  }

  chooseToEditDog(dog) {
    this.selectedDog = dog;
  }

  deleteDog(i) {
  this.dogService.deleteADog(i);
  }
}

