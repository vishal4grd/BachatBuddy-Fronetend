import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
 standalone: true,           // ✅ Add this
  imports: [CommonModule, DiscountPipe] 
})
export class ProductDetailComponent implements OnInit {
  product: any;
  reviews: any[] = [];
  relatedProducts: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.loadProduct(id);
  }

  loadProduct(id: any) {
    // Replace this with API call
    this.product = {
      pid: id,
      pname: 'Bluetooth Earbuds',
      pimage: 'assets/images/earbuds.png',
      price: 1999,
      qty: 10,
      category: 'Electronics',
      description: 'High-quality wireless earbuds with long battery life and clear sound.'
    };

    this.reviews = [
      { user: 'Rahul', rating: 5, comment: 'Amazing sound quality!', date: 'Oct 2025' },
      { user: 'Sneha', rating: 4, comment: 'Good bass and fit, worth the price.', date: 'Oct 2025' },
      { user: 'Amit', rating: 3, comment: 'Battery backup could be better.', date: 'Sep 2025' }
    ];

    this.relatedProducts = [
      {
        pid: 2,
        pname: 'Wireless Headphones',
        pimage: 'assets/images/headphones.png',
        price: 2999
      },
      {
        pid: 3,
        pname: 'Bluetooth Speaker',
        pimage: 'assets/images/speaker.png',
        price: 1499
      }
    ];
  }

  addToCart(product: any) {
    Swal.fire({
          title: 'Added to Cart!',
          text: `${this.product} has been added to your cart.`,
          icon: 'success',
          confirmButtonText: 'Go to Cart'
        }).then((result: { isConfirmed: any; }) => {
          if (result.isConfirmed) {
            this.router.navigate(['/cart']);
          }
        });
    
  }
  

  buyNow(product: any) {
    this.router.navigate(['/buy'], { queryParams: { id: product.pid } });
  }

  viewProduct(id: number) {
    this.router.navigate(['/product-detail'], { queryParams: { id } });
  }
}
