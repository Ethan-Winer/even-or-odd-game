import { Component, Input, OnInit } from '@angular/core';
import { NumberBoxComponent } from '../number-box/number-box.component';

@Component({
  selector: 'app-completed-tracker',
  templateUrl: './completed-tracker.component.html',
  styleUrls: ['./completed-tracker.component.css']
})
export class CompletedTrackerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
