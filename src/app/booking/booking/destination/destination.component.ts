import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.locations = this.london;
    console.log('destinations', this.destinations);

  }

  destinations: any[] = [
    {
      image: "/assets/images/destination/Mountain Hiking Tour.png",
      title: 'Mountain Hiking Tour',
      caption: 'Mountain Hiking Tour',
      price: '$89'
    },
    {
      image: "/assets/images/destination/Machu Picchu, Peru.png",
      title: 'Machu Picchu, Peru',
      caption: 'Machu Picchu, Peru',
      price: '$99'
    },
    {
      image: "/assets/images/destination/The Grand Canyon, Arizona.png",
      title: 'The Grand Canyon, Arizona',
      caption: 'The Grand Canyon, Arizona',
      price: '$70'
    }
  ];

  // {
  //   image: "/assets/images/experience/man-with-camera-new.png",
  //   title: 'The Grand Canyon, Arizona',
  //   caption: 'The Grand Canyon, Arizona',
  //   price: '$70 /Person'
  // },
  // {
  //   image: "/assets/images/experience/man-with-camera-new.png",
  //   title: 'The Grand Canyon, Arizona',
  //   caption: 'The Grand Canyon, Arizona',
  //   price: '$70 /Person'
  // },
  // {
  //   image: "/assets/images/experience/man-with-camera-new.png",
  //   title: 'The Grand Canyon, Arizona',
  //   caption: 'The Grand Canyon, Arizona',
  //   price: '$70 /Person'
  // }

  cities: any = ['London', 'Bangkok', 'England', 'Singapore', 'Italy'];
  locations: any[] = [];
  london: any[] = [
    {
      id: 1,
      image: '/assets/images/destination/london/london-1.png',
      title: 'London',
      caption: 'Worefall',
      rating: '4.5'
    },
    {
      id: 2,
      image: '/assets/images/destination/london/london-2.png',
      title: 'London',
      caption: 'Worefall',
      rating: '4.1'
    },
    {
      id: 3,
      image: '/assets/images/destination/london/london-3.png',
      title: 'London',
      caption: 'Worefall',
      rating: '3.1'
    },
    {
      id: 4,
      image: '/assets/images/destination/london/london-4.png',
      title: 'London',
      caption: 'Worefall',
      rating: '4.9'
    },
    {
      id: 5,
      image: '/assets/images/destination/london/london-5.png',
      title: 'London',
      caption: 'Worefall',
      rating: '3.9'
    },
    {
      id: 6,
      image: '/assets/images/destination/london/london-6.png',
      title: 'London',
      caption: 'Worefall',
      rating: '2.1'
    },
  ];

  bangkok: any[] = [
    {
      id: 1,
      image: '/assets/images/destination/bangkok/bangkok-1.jpg',
      title: 'Bangkok',
      caption: 'Grand Palace',
      rating: '4.5'
    },
    {
      id: 2,
      image: '/assets/images/destination/bangkok/bangkok-2.jpg',
      title: 'Bangkok',
      caption: 'Grand Palace',
      rating: '4.4'
    },
    {
      id: 3,
      image: '/assets/images/destination/bangkok/bangkok-3.avif',
      title: 'Bangkok',
      caption: 'Grand Palace',
      rating: '3.5'
    },
    {
      id: 4,
      image: '/assets/images/destination/bangkok/bangkok-4.jpg',
      title: 'Bangkok',
      caption: 'Grand Palace',
      rating: '3.2'
    },
    {
      id: 5,
      image: '/assets/images/destination/bangkok/bangkok-5.jpg',
      title: 'Bangkok',
      caption: 'Grand Palace',
      rating: '4.1'
    },
    {
      id: 6,
      image: '/assets/images/destination/bangkok/bangkok-6.jpg',
      title: 'Bangkok',
      caption: 'Grand Palace',
      rating: '3.3'
    },
  ];

  england: any[] = [
    {
      id: 1,
      image: '/assets/images/destination/england/england-1.avif',
      title: 'England',
      caption: 'Tower Bridge',
      rating: '4.5'
    },
    {
      id: 2,
      image: '/assets/images/destination/england/england-2.avif',
      title: 'England',
      caption: 'Tower Bridge',
      rating: '4.4'
    },
    {
      id: 3,
      image: '/assets/images/destination/england/england-3.avif',
      title: 'England',
      caption: 'Tower Bridge',
      rating: '2.1'
    },
    {
      id: 4,
      image: '/assets/images/destination/england/england-4.avif',
      title: 'England',
      caption: 'Tower Bridge',
      rating: '4.7'
    },
    {
      id: 5,
      image: '/assets/images/destination/england/england-5.avif',
      title: 'England',
      caption: 'Tower Bridge',
      rating: '3.3'
    },
    {
      id: 6,
      image: '/assets/images/destination/england/england-6.avif',
      title: 'England',
      caption: 'Tower Bridge',
      rating: '4.5'
    },
  ];

  singapore: any[] = [
    {
      id: 1,
      image: '/assets/images/destination/singapore/singapore-1.jpg',
      title: 'Singapore',
      caption: 'Marina Bay',
      rating: '4.5'
    },
    {
      id: 2,
      image: '/assets/images/destination/singapore/singapore-2.jpg',
      title: 'Singapore',
      caption: 'Marina Bay',
      rating: '2.5'
    },
    {
      id: 3,
      image: '/assets/images/destination/singapore/singapore-3.jpg',
      title: 'Singapore',
      caption: 'Marina Bay',
      rating: '3.8'
    },
    {
      id: 4,
      image: '/assets/images/destination/singapore/singapore-4.jpg',
      title: 'Singapore',
      caption: 'Marina Bay',
      rating: '4.5'
    },
    {
      id: 5,
      image: '/assets/images/destination/singapore/singapore-5.jpg',
      title: 'Singapore',
      caption: 'Marina Bay',
      rating: '4.1'
    },
    {
      id: 6,
      image: '/assets/images/destination/singapore/singapore-6.jpg',
      title: 'Singapore',
      caption: 'Marina Bay',
      rating: '4.0'
    },
  ];

  italy: any[] = [
    {
      id: 1,
      image: '/assets/images/destination/italy/italy-1.jpg',
      title: 'Italy',
      caption: 'Colosseum',
      rating: '4.8'
    },
    {
      id: 2,
      image: '/assets/images/destination/italy/italy-2.jpg',
      title: 'Italy',
      caption: 'Colosseum',
      rating: '4.4'
    },
    {
      id: 3,
      image: '/assets/images/destination/italy/italy-3.jpg',
      title: 'Italy',
      caption: 'Colosseum',
      rating: '3.9'
    },
    {
      id: 4,
      image: '/assets/images/destination/italy/italy-4.jpg',
      title: 'Italy',
      caption: 'Colosseum',
      rating: '2.1'
    },
    {
      id: 5,
      image: '/assets/images/destination/italy/italy-5.jpg',
      title: 'Italy',
      caption: 'Colosseum',
      rating: '3.4'
    },
    {
      id: 6,
      image: '/assets/images/destination/italy/italy-6.jpg',
      title: 'Italy',
      caption: 'Colosseum',
      rating: '3.0'
    },
  ];

  changeLocation(city: string) {
    if (city === 'London') {
      this.locations = this.london;
    } else if (city === 'Bangkok') {
      this.locations = this.bangkok;
    } else if (city === 'England') {
      this.locations = this.england;
    } else if (city === 'Singapore') {
      this.locations = this.singapore;
    } else if (city === 'Italy') {
      this.locations = this.italy;
    }
  }
}
