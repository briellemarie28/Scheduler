import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {
  "task" : string
  "time" : string
  tasks = [
    {"task" : "Feed the dog",
    "time" : "6:30"},
    {"task" : "Get to work on time",
    "time" : "9:00"},
    {"task" : "Delete emails",
      "time": "2:45"},
    {"task" : "Go to the movies",
      "time" : "8:15"}];

  @Input()
  newTomorrowTask: string;
  newTime: string
    constructor() {
     }
     addTask() {
      this.tasks.push ({
        "task" : this.newTomorrowTask,
        "time" : this.newTime
      })
    }


  ngOnInit() {
  }
}
