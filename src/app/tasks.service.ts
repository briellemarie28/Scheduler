import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(public http : HttpClient) { }
  getTasks() {
    return this.http
    .get("http://localhost:3000/tasks",
    { responseType: "json"}
    );
    }
    // addAnimal(newAnimal) {
    // return this.http
    // .post("http://localhost:3000/api/animals",
    // { name: newAnimal },
    // { responseType: "json"}
    // );
    // }

  
}
