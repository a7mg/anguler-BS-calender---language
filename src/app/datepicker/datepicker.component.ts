import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  model;

  @Input() dataRequired: string; // for validation
  @Output() dateSelect: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.dataRequired);
  }

  getValue() {
    this.dateSelect.emit(this.model);
  }

}
