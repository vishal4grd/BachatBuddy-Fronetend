import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalItems = 0;
  totalPrice = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((items: CartItem[]) => {
      this.cartItems = items.map(item => ({
        name: item.pname,
        price: item.price,
        quantity: item.qty,
        pid: item.pid,
        image: item.image
      }));
      this.updateTotals();
    });

    const items = this.cartService.getCartItems();
    this.cartItems = items.map(item => ({
      name: item.pname,
      price: item.price,
      quantity: item.qty,
      pid: item.pid,
      image: item.image
    }));
    this.updateTotals();
  }

  updateTotals() {
    this.totalItems = this.cartItems.reduce((sum, i) => sum + i.quantity, 0);
    this.totalPrice = this.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
increaseQuantity(item: any) {
  item.quantity++;       // + button adds
  this.syncWithService();
}

decreaseQuantity(item: any) {
  if (item.quantity > 1) {
    item.quantity--;     // - button subtracts
    this.syncWithService();
  }
}


  removeItem(item: any) {
    this.cartService.removeItem(item.pid);
  }

  buyNow(item: any) {
    this.router.navigate(['/buy', item.pid], { queryParams: { id: item.pid } });
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }

  syncWithService() {
    this.cartService.clearCart();
    this.cartItems.forEach(item =>
      this.cartService.addToCart({
        pid: item.pid,
        pname: item.name,
        price: item.price,
        qty: item.quantity,
        image: item.image
      })
    );
    this.updateTotals();
  }
}
