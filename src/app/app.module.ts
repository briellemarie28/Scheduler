import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';

import {ScheduleModule, AgendaService, DayService,
   WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TomorrowComponent } from './schedule/tomorrow/tomorrow.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    TomorrowComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
    CalendarModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
