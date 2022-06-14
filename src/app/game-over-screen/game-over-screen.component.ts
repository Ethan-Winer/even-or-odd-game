import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-over-screen',
  templateUrl: './game-over-screen.component.html',
  styleUrls: ['./game-over-screen.component.css']
})
export class GameOverScreenComponent implements OnInit {
  @Input() scores: number[];
  @Output() playAgainClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitPlayAgainClicked() {
    this.playAgainClicked.emit()
  }
}
