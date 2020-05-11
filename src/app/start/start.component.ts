import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Fading } from '../animations/fading.animation';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [Fading]
})
export class StartComponent implements OnInit {

  playForm: FormGroup;
  @Output() start:EventEmitter<string> = new EventEmitter<string>();

  isShowDataList: boolean = false;

  constructor(private fb: FormBuilder) {
    this.playForm = this.fb.group({
      'difficult': [''],
    });
  }

  ngOnInit(): void {
  }

  play() {
    this.start.emit(this.playForm.value.difficult);
  }

  showSwitchDataList() {
    this.isShowDataList = !this.isShowDataList;
  }

  selectItem(difficult: string) {
    this.playForm.get('difficult').setValue(difficult);
    this.isShowDataList = false;
  }
}
