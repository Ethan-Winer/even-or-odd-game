import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.css']
})
export class NumberBoxComponent implements OnInit {
  @Input() bgc: string;
  @Input() num: number;
  position: string[];
  possibleBackgrounds: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  constructor() {
    this.makeNewNumberBox();
  }


  ngOnInit(): void {
  }

  makeNewNumberBox() {
    let randomNumber: number = Math.floor(Math.random() * this.possibleBackgrounds.length)
    this.bgc = this.possibleBackgrounds[randomNumber];
    this.num = Math.floor(Math.random() * 100 + 1);
    this.position = [this.randomCoordinate(), this.randomCoordinate()]
    console.log(this.position);
  }

  randomCoordinate() {
    return Math.floor(Math.random() * 601) + 'px';
  }

}
