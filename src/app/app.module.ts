import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';

import { DbSevice } from "../sevices/db.sevice";

import { AppComponent } from './app.component';
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const routs: Routes = [
    {path: 'tasks', component: TasksListComponent},
    {path: 'tasks/:id', component: DetailComponent},
    {path: 'tasks/edit/:id', component: EditComponent},
    {path: '', redirectTo: '/tasks', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routs),
    FormsModule
  ],
  providers: [ DbSevice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
