import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  @Input() value: number = 0;

  data = {
    beginDate: '2021-12-17',
    currentDate: '2022-01-14',
    endDate: '2022-03-18',
  };

  constructor() {}

  ngOnInit(): void {
    this.value = this.calcWidth();
  }

  calcWidth() {
    const beginDate = new Date(this.data.beginDate);
    const endDate = new Date(this.data.endDate);
    const currentDate = new Date(this.data.currentDate);

    const barWidth = endDate.getTime() - beginDate.getTime();
    const currentWidth = endDate.getTime() - currentDate.getTime();
    const spanWidth = (currentWidth / barWidth) * 100;

    return spanWidth;
  }
}
