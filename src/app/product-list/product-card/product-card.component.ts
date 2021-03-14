import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  product = {
    "id":3,
    "name":"iPhone 11 pro",
    "imageUrl":"/assets/images/iphone.jpg",
    "rating":5,
    "reviews":50,
    "price":1500,
    "description":"This is iPhone, apple topnotch flagship device."
 }

  constructor() { }

  addToCart() {
    console.log('Add to Cart called')
  }

  ngOnInit(): void {
  }

}
