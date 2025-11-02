import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prod: any[] = [
    {
      pid: 1,
      pname: 'Bluetooth Earbuds',
      pimage: 'assets/images/earbuds.png',
      price: 1999,
      qty: 20,
      category: 'Electronics',
      shortDesc: 'Crystal-clear sound and fast charging.'
    },
    {
      pid: 2,
      pname: 'Wedding Saree',
      pimage: 'assets/images/saree.png',
      price: 2999,
      qty: 15,
      category: 'Wedding Bazar',
      shortDesc: 'Elegant silk saree for special occasions.'
    },
    {
      pid: 3,
      pname: 'Organic Rice',
      pimage: 'assets/images/rice.png',
      price: 499,
      qty: 50,
      category: 'Groceries',
      shortDesc: 'Premium quality long-grain organic rice.'
    }
  ];

  categories = ['All', 'Groceries', 'Electronics', 'Fashion', 'Beauty', 'Wedding Bazar', 'Gifts'];
  selectedCategory = 'All';
  filteredProducts = this.prod;

  constructor(private router: Router, private CartService: CartService) {}

  ngOnInit(): void {}

  filterByCategory(cat: string) {
    this.selectedCategory = cat;
    this.filteredProducts = cat === 'All' ? this.prod : this.prod.filter(p => p.category === cat);
  }

  addToCart(item: any) {
    this.CartService.addToCart({
      pid: item.pid,
      pname: item.pname,
      price: item.price,
      image: item.pimage,
      qty: 1
    });

    Swal.fire({
      title: 'Added to Cart!',
      text: `${item.pname} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'Go to Cart'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.router.navigate(['/cart']);
      }
    });
  }

  viewDetails(pid: number) {
    this.router.navigate(['/product-detail', pid]);
  }

  buyNow(pid: number) {
    this.router.navigate(['/buy', pid]);
  }
}
