import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";



import { DbSevice } from "../../sevices/db.sevice";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  private id: string;
  private subscription: Subscription;

  public task;

  constructor( private activateRoute: ActivatedRoute, private dbService: DbSevice, private router: Router) {
    this.subscription = activateRoute.params.subscribe( params => this.id = params['id'] )
  }

  goBack(){
    this.router.navigate(['/tasks']);
  }

  getTask(id) {
      this.dbService.getTasksById(this.id).subscribe( task => this.task = task);
  }

  edit(id) {
    this.router.navigate(['tasks/edit/', id]);
  }

  ngOnInit() {
      this.getTask(this.id);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
