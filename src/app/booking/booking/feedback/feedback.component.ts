import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stars: any[] = ['/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg'];

  feedbackArray: any[] = [
    {
      userName: 'Andrew Sarma',
      occupation: 'Enterpreneur',
      review: 'Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.',
      rating: ['/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg']
    },
    {
      userName: 'Bobby Lashley',
      occupation: 'Wrestler',
      review: 'Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.',
      rating: ['/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg']
    },
    {
      userName: 'Brock Lesnar',
      occupation: 'Mixed Martial Artist',
      review: 'Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.',
      rating: ['/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg']
    },
    {
      userName: 'Robert Pattinson',
      occupation: 'Actor',
      review: 'Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.',
      rating: ['/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg', '/assets/images/feedback/star.svg']
    },
  ];
}
