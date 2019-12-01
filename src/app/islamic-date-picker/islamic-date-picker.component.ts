import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';

const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {

  getWeekdayShortName(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-islamic-date-picker',
  templateUrl: './islamic-date-picker.component.html',
  styleUrls: ['./islamic-date-picker.component.scss'],

  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicCivil },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
  ]
})
export class IslamicDatePickerComponent implements OnInit {
  model: NgbDateStruct;

  @Input() dataRequired: string; // for validation
  @Output() dateSelect: EventEmitter<NgbDateStruct> = new EventEmitter();

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
    console.log(this.dataRequired);
  }

  getValue() {
    this.dateSelect.emit(this.model);
  }
}
