import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { ProgresBarComponent } from './shared/progres-bar/progres-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditTaskComponent,
    ListTasksComponent,
    ProgresBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
