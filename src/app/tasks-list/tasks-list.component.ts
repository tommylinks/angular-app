import { Component, OnInit } from '@angular/core';
import { DbSevice } from "../../sevices/db.sevice";
import {Response} from "@angular/http";
import { Router } from "@angular/router";

@Component({
    selector: 'tasks-list',
    templateUrl: 'tasks-list.component.html',
    styleUrls: ['tasks-list.component.css']
})
export class TasksListComponent implements OnInit{
    tasks: Array<{}> = [];

    constructor(private dbService: DbSevice,
                private router: Router) {}

    goDetail(id: string) {
       this.router.navigate(["/tasks", id])
    }

    ngOnInit(){
        this.dbService.getTasks().subscribe( (data: Response) => this.tasks = data.json().filter( data => data.obj_status == 'active') );
    }
}