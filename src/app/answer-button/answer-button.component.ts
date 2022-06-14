import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit {
  @Input() answer: string;
  @Output() onClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.answer);
    this.onClicked.emit();
  }

}
