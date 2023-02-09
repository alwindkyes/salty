import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footerData: any[] = [
    {
      data: ['Resources', 'Download', 'Help Center', 'Guide Book', 'App Directory']
    },
    {
      data: ['Travellers', 'Why Travellers', 'Enterprice', 'Customer Stories', 'Instagram post']
    },
    {
      data: ['Company', 'Travelling', 'About Locato', 'Success', 'Information']
    },
    {
      data: ['Get App', 'App Store', 'Google Play Store']
    }
  ];
}
