import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  isShown: boolean = false;
  constructor() {}
  toggle() {
    this.isShown = !this.isShown;
    console.log(this.isShown);
  }
  ngOnInit(): void {}
}
