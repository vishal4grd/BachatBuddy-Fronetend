// src/app/orders.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private base = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getOrders(uid: string): Observable<any[]> {
    if (!uid) return of([]);
    return this.http.get<any[]>(`${this.base}/${uid}/orders`);
  }
}
