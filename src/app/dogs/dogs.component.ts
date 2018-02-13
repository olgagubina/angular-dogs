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

  deleteDog(i) {
  this.dogService.deleteADog(i);
  }
}

