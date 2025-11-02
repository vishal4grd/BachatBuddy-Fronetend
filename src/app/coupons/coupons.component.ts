import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../services/coupons.service'; // Adjust path if needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css'] // Optional: add styling
})
export class CouponsComponent implements OnInit {
  coupons: any[] = [];
  message: string = '';
  loading: boolean = true;
  userName: string = '';
  userPhone: string = '';

  constructor(
    private couponsService: CouponsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const uid = sessionStorage.getItem('uid');
    const name = sessionStorage.getItem('userName');
    const phone = sessionStorage.getItem('userPhone');

    if (!uid) {
      this.loading = false;
      this.router.navigate(['/login']);
      return;
    }

    this.userName = name || 'User';
    this.userPhone = phone || '';

    this.couponsService.getCoupons(uid).subscribe({
      next: (data) => {
        this.coupons = data || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Coupon fetch error:', err);
        this.message = 'Failed to load coupons';
        this.loading = false;
      }
    });
  }

  apply(coupon: any): void {
    const uid = sessionStorage.getItem('uid');
    if (!uid) return;

    this.couponsService.applyCoupon(uid, coupon.code).subscribe({
      next: () => {
        this.message = 'Coupon applied!';
      },
      error: (err) => {
        console.error('Apply coupon error:', err);
        this.message = 'Apply failed';
      }
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}