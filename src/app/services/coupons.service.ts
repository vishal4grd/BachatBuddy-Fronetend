// src/app/coupons.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CouponsService {
  private base = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getCoupons(uid: string): Observable<any[]> {
    if (!uid) return of([]);
    return this.http.get<any[]>(`${this.base}/${uid}/coupons`);
  }

  applyCoupon(uid: string, couponCode: string): Observable<any> {
    return this.http.post(`${this.base}/${uid}/applyCoupon`, { coupon: couponCode });
  }
}
