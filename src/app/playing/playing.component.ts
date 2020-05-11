import { Component, OnInit } from '@angular/core';
import { Fading } from '../animations/fading.animation';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css'],
  animations: [Fading]
})
export class PlayingComponent implements OnInit {

  seconds: number = 10;

  events: string[] = ["3x3", "4x3", "4x4", "5x5"];
  
  isShowStartWindow: boolean = true;
  
  difficult: string;
  
  board: number[][] = [];

  isStart: boolean = false;
  
  currentNumber: number = 0;

  isEnd: boolean = false;

  isCompletedLevel: boolean = false;

  firstNumber: number = 0;
  secondNumber: number = 0;

  msg: string;

  constructor() { }

  ngOnInit(): void {
  }
  
  initialization() {
    this.seconds = 20;
    this.difficult = '4x4';
    this.isShowStartWindow = true;
  
    this.board = [];

    this.isStart = false;

    this.currentNumber = 0;
    
    this.isEnd = false;

    this.isCompletedLevel = false;

    this.firstNumber = 0;
    this.secondNumber = 0;

    this.msg = '';
  }

  reset() {
    this.initialization();
  }

  start(event: string) {
    this.initialization();
    if(this.events.some(x => x === event)) {
      this.difficult = event;
    }
    if(this.isShowStartWindow) {
      this.drawBoard();
    }
    this.isShowStartWindow = false;

    this.timing();
  }

  timing() {
    let interval = setInterval(() => {
      this.seconds--;
      if(this.isEnd || this.isCompletedLevel || this.isShowStartWindow || !this.isStart) {
        clearInterval(interval);
      }
      if(this.seconds <= 0) {
        this.end('Time out!');
        clearInterval(interval);
      }
    }, 1000);
  }

  drawBoard() {
    let splittedString = this.difficult.split('x');
    this.firstNumber = +splittedString[0];
    this.secondNumber = +splittedString[1];
    this.isStart = true;
    
    this.generateNumbers();
    
    this.board.push();
  }
  
  generateNumbers() {
    let index = 0;
    let arr = new Array<number>();
    for(let row = 0; row < this.firstNumber; row++) {
      for(let col = 0; col < this.secondNumber; col++) {
        index++;
        arr.push(index);
      }
    }
    
    arr = this.randomFunc(arr);
    this.separateArray(arr);
    console.log(this.board);
  }
  
  separateArray(arr: Array<number>) {
    let startIndex = 0;
    for (let i = 0; i < this.firstNumber; i++) {
      let tempArr = new Array<number>();
      for (let j = startIndex; j < this.secondNumber + startIndex; j++) {
        tempArr.push(arr[j]);
      }
      
      this.board.push(tempArr);
      startIndex += Math.min(this.firstNumber, this.secondNumber);
    }
  }

  randomFunc(myArr) {
    var l = myArr.length, temp, index;  
    while (l > 0) {  
       index = Math.floor(Math.random() * l);  
       l--;  
       temp = myArr[l];          
       myArr[l] = myArr[index];          
       myArr[index] = temp;      
    }

    return myArr;
  }

  clickNumber(number: number) {
    if(this.currentNumber === number - 1) {
      this.currentNumber++;

      if(this.checkForCompletedLevel(number)) {
        this.completedLevel();
      }
    } else {
      this.end('You lost!');
    }
  }

  end(msg: string) {
    this.isEnd = true;
    this.msg = msg;
  }

  back() {
    this.isShowStartWindow = true;
    this.isStart = false;

    this.reset();
  }

  completedLevel() {
    this.isCompletedLevel = true;
  }

  checkForCompletedLevel(number: number) {
    return this.currentNumber >= this.firstNumber * this.secondNumber;
  }
}
