import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  addedDog: String;

  constructor(private dogService: DogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dogs = this.dogService.getDogs();	
    this.route.queryParams.subscribe(queryParams => {
      if(queryParams.name) {
      this.dogs = this.dogService.getDogbyName(queryParams.name.toLowerCase());
      console.log(this.dogs);
      }
    });
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

  addLastUpdated(dog) {
    this.addedDog = "Last dog added: " + new Date().toString() + ", name: " + dog.name;
  }

  chooseToEditDog(dog) {
    this.selectedDog = Object.assign({},dog);
  }

  cancelToEditDog(dogs) {
    this.dogs = dogs;	    
  }

  deleteDog(i) {
  this.dogService.deleteADog(i);
  }
}

