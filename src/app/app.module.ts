import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from './dog.service';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { AddEditComponent } from './add-edit/add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
