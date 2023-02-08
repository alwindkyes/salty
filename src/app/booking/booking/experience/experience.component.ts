import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experienceDetails: any = [
    {
      number: '12K',
      subText: 'Succes Journey'
    },
    {
      number: '16+',
      subText: 'Awards Winning'
    },
    {
      number: '20+',
      subText: 'Years Of Experience'
    },
  ]
}
