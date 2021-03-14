import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product = {
    id: 8, 
    name: 'iPhone 11 pro', 
    specs: ['8GB Ram', '256GB Storage', '64MP Camera'],
    imageUrl: '/assets/images/iphone.jpg',
    rating: 5,
    reviews: 15,
    price: 1500, 
    description: 'This is iPhone, apple topnotch flagship device.',
    availableOffers: [
      {
        discount: '15%',
        offerTerms: 'HDFC Credit Card first time users 15% off',
        provider: 'HDFC Bank'
      },
      {
        discount: '10%',
        offerTerms: 'SBI Debit Card any user, 15% off',
        provider: 'SBI'
      }
    ],
    warranty: '1 year',
  };

  constructor() { }

  addToCart() {
    console.log('Test');
  }

  ngOnInit(): void {
  }

}
