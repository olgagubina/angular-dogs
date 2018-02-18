import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dogs/dog.model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  dogs: any; 
  @Input() newDog: Dog = new Dog();
  @Output() dogAdded : EventEmitter<Dog> = new EventEmitter();
  @Output() cancelEditdogs : EventEmitter<any> = new EventEmitter();

  constructor(private dogService: DogService) { }

  ngOnInit() {
    // this.dogs = this.dogService.getDogs();
  }

  addDog() {
    this.dogService.addADog(this.newDog);
    this.dogAdded.emit(this.newDog);   
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
