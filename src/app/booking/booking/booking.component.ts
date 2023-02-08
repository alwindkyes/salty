import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  initializeForm() {
    this.bookingForm = this.formBuilder.group({
      location: new FormControl('Center Point, Lo...'),
      date: new FormControl('9th March 2021')
    })
  }
}
