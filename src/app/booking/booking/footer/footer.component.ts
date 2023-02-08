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

  Resources: any[] = ['Download', 'Help Center', 'Guide Book', 'App Directory'];
  Travellers: any[] = ['Why Travellers', 'Enterprice', 'Customer Stories', 'Instagram post'];
  // Resources: any[] = ['Download', 'Help Center', 'Guide Book', 'App Directory'];
  // Resources: any[] = ['Download', 'Help Center', 'Guide Book', 'App Directory'];
}
