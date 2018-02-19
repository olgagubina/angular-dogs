import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';
import { Dog } from '../dogs/dog.model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  dogs: any; 
  newDog: Dog = new Dog();

  constructor(private dogService: DogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.newDog = Object.assign({}, this.dogService.getDogbyID(params.id));
      // console.log("the id parameter is: " + params.id);
    });
  }

  addDog() {
    this.dogService.addADog(this.newDog);
    // this.dogAdded.emit(this.newDog);   
    this.newDog = new Dog();
  }

  edDog() {
    this.dogService.editDog(this.newDog.id, this.newDog);
    this.newDog = new Dog();
  }

  cancelEd() {
    // this.dogs = this.dogService.getDogs();
    // console.log(this.dogs);
    // this.cancelEditdogs.emit(this.dogs);
    this.newDog = new Dog();
  }
}
