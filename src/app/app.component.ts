import { Component, ElementRef, ViewChild } from '@angular/core';
import { NumberBoxComponent } from './number-box/number-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game';

  @ViewChild('numberBox', { 'static': true }) numBox;
  scores: number[] = [];
  answerCount: number = 0;
  startTime: number = Date.now();
  gameOver: boolean = false;

  adjustScore(answer: string) {
    let numberIsEven = this.numBox.num % 2 == 0;
    if ((answer === 'even' && numberIsEven) || (answer === 'odd' && !numberIsEven)) {
      this.answerCount++;
    }
    else {
      this.endGame(null);
    }

    if (this.answerCount == 10) {
      let average: string = ((Date.now() - this.startTime) / 1000).toFixed(3);
      this.endGame(parseFloat(average));
    }

    if (!this.gameOver) {

      this.numBox.makeNewNumberBox();
    }
  }

  endGame(score: number) {
    this.gameOver = true;
    if (score == null) {
      return;
    }
    let index: number = 0;
    let numberAdded: boolean = false;
    while (index < 5 && !numberAdded) {
      if (score < this.scores[index]) {
        this.scores.splice(index, 0, score);
        this.scores = this.scores.slice(0, 5);
        numberAdded = true;
      }
      else if (index == this.scores.length) {
        this.scores.push(score);
        numberAdded = true;
      }
      index++;
    }
  }

  startGame() {
    this.answerCount = 0;
    this.gameOver = false;
    this.startTime = Date.now()
    this.numBox.makeNewNumberBox();
  }
}