import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineserviceService {
  constructor(public h: HttpClient) {}

  // (Optional) backend endpoints for future integration
  // showproduct(): Observable<any> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.h.get('http://localhost:3000/show', httpOptions);
  // }
  // Addnewuser(data: any): Observable<any> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.h.post('http://localhost:3000/add', data, httpOptions);
  // }
  // userlogin(data: any): Observable<any> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.h.post('http://localhost:3000/login', data, httpOptions);
  // }

  // ✅ Local mock product data
  prod: IProd[] = [
    { pid: 'p001', pname: 'TV', price: 10000, qty: 10, pimage: '/assets/tv.jpg' },
    { pid: 'p002', pname: 'Washing Machine', price: 12000, qty: 9, pimage: '/assets/washingmachine.jpg' },
    { pid: 'p003', pname: 'Monitor', price: 11000, qty: 3, pimage: '/assets/monitor.jpg' },
    { pid: 'p004', pname: 'Watch', price: 9000, qty: 5, pimage: '/assets/watch.jpg' },
    { pid: 'p005', pname: 'Fan', price: 300, qty: 9, pimage: '/assets/fan.jpg' },
    { pid: 'p006', pname: 'Fridge', price: 30000, qty: 55, pimage: '/assets/Fridge.jpg' },
    { pid: 'p007', pname: 'Projector', price: 80000, qty: 33, pimage: '/assets/projector.jpg' },
    { pid: 'p008', pname: 'Inverter', price: 90000, qty: 44, pimage: '/assets/power.jpg' },
    { pid: 'p009', pname: 'AC', price: 190000, qty: 44, pimage: '/assets/ac.jpg' },
    { pid: 'p010', pname: 'Car', price: 900000, qty: 44, pimage: '/assets/car.jpg' },
    { pid: 'p011', pname: 'Mobile', price: 19000, qty: 44, pimage: '/assets/mobile.jpg' }
  ];

  // ✅ Add this to fix your Buy component
  getProducts(): IProd[] {
    return this.prod;
  }

  // ✅ Get single product details by ID
  getProductById(id: string): IProd | undefined {
    return this.prod.find(p => p.pid === id);
  }
}

export interface IProd {
  pid: string;
  pname: string;
  price: number;
  qty: number;
  pimage: string;
}
