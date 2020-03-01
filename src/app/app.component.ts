import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})



export class AppComponent {
  title = 'Scheduler';
  public minDate: Date = new Date ("02/01/2020");
  public maxDate: Date = new Date ("12/31/2020");
  public value: Date = new Date ("02/29/2020");
}
  