import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking/booking.component';
import { CategoriesComponent } from './booking/categories/categories.component';
import { ExperienceComponent } from './booking/experience/experience.component';
import { DestinationComponent } from './booking/destination/destination.component';
import { FeedbackComponent } from './booking/feedback/feedback.component';
import { SignInComponent } from './booking/sign-in/sign-in.component';
import { FooterComponent } from './booking/footer/footer.component';
import { HeaderComponent } from './booking/header/header.component';


@NgModule({
  declarations: [
    BookingComponent,
    CategoriesComponent,
    ExperienceComponent,
    DestinationComponent,
    FeedbackComponent,
    SignInComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
