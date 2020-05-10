import { Component, OnInit } from '@angular/core';
import { Fading } from '../animations/fading.animation';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css'],
  animations: [Fading]
})
export class PlayingComponent implements OnInit {

  isShowStartWindow: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.isShowStartWindow = true;
  }

  start(event: string) {
    console.log(event);
    this.isShowStartWindow = false;
  }
}
