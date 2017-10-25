import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/catch';


@Injectable()
export class DbSevice {

    private url = 'tasks.json';

    constructor(private http: Http) {}

    getTasks(): Observable<{}>  {
        return this.http.get(this.url)
            .catch(this.handleError);
    }

    getTasksById(id: string): Observable<{}> {
        return this.http.get(this.url)
            .map( data => data.json().find( task => task.id == id) )
            .catch(this.handleError);
    }

    updateTask(task) {
        return this.http.put(this.url + '/' + task.id, task)
            .catch(this.handleError);
    }


    private handleError(error:any, cought: Observable<any>): any {
        let message = error.message ? error.message : error.toString();

        console.log(message);

        return Observable.throw(message);
    }

}