import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common/src/pipes/date_pipe';
import { DogService } from './dog.service';
import { Dog } from './dogs/dog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'the dog club';

  constructor(){};

  ngOnInit() { 
    // this.dogs = this.dogService.getDogs();	
    // this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
  }

  ngOnDestroy(){
  	// window.clearInterval(this.sayHello);	
  }
}
