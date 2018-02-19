import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from './dog.service';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    AddEditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule 
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
