import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { DbSevice } from "../../sevices/db.sevice";

import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public task;
  public id: string;

  public name: string;
  public estimate: string;

  public errorMsg = false;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private dbService: DbSevice) {

    this.subscription = this.activateRoute.params.subscribe( params => this.id = params["id"] );
  }

  getTask(id) {
      this.dbService.getTasksById(this.id).subscribe( task => {
          this.task = task;
          this.name = this.task.name;
          this.estimate = this.task.estimated_effort;
      });
  }

  onSubmit(form: NgForm){
      this.task.name = form.value.name;
      this.task.estimated_effort = form.value.estimate;

      this.dbService.updateTask(this.task)
          .subscribe( () => this.goBack() , () => this.errorMsg = true);
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }

  ngOnInit() {
      this.getTask(this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
