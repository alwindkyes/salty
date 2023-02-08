import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.categories = this.categoriesDoubleOne;
    // this.getSlide();
    this.demo();
  }
  arrayThree: any = [];
  demo() {
  }

  categories: any = [];
  categoriesDoubleOne: any = [
    {
      image: '/assets/images/categories/beach.png',
      caption: 'Beach'
    },
    {
      image: '/assets/images/categories/desert.png',
      caption: 'Desert'
    },
    {
      image: '/assets/images/categories/mountain.png',
      caption: 'Mountain'
    },
    {
      image: '/assets/images/categories/temple.png',
      caption: 'Temple'
    },
    {
      image: '/assets/images/categories/tower.png',
      caption: 'Tower'
    },
    {
      image: '/assets/images/categories/pyramid.png',
      caption: 'Pyramid'
    },
  ];
  categoriesDoubleTwo: any = [
    {
      image: '/assets/images/categories/pyramid.png',
      caption: 'Pyramid'
    },
    {
      image: '/assets/images/categories/tower.png',
      caption: 'Tower'
    },
    {
      image: '/assets/images/categories/temple.png',
      caption: 'Temple'
    },
    {
      image: '/assets/images/categories/mountain.png',
      caption: 'Mountain'
    },
    {
      image: '/assets/images/categories/desert.png',
      caption: 'Desert'
    },
    {
      image: '/assets/images/categories/beach.png',
      caption: 'Beach'
    },
  ];

  // currentSlide = 0;
  // image = '';

  // getSlide() {
  // }
  getPrevious() {
    this.categories = this.categories === this.categoriesDoubleOne ? this.categoriesDoubleTwo : this.categoriesDoubleOne;
    // this.categoriesDouble = this.categories;
    // this.currentSlide = this.currentSlide === 0 ? 0 : this.currentSlide - 1;
  }
  //edit here    
  getNext() {
    this.categories = this.categories === this.categoriesDoubleOne ? this.categoriesDoubleTwo : this.categoriesDoubleOne;
    // this.currentSlide = this.currentSlide === this.categories.length ? this.currentSlide : this.currentSlide + 1;
  }
}
