import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AddressService {
  private baseUrl = 'http://localhost:8080/api/addresses';

  constructor(private http: HttpClient) {}

  getAddresses(uid: string) {
    return this.http.get<any[]>(`${this.baseUrl}/${uid}`);
  }

  addAddress(uid: string, payload: any) {
    return this.http.post(`${this.baseUrl}/${uid}`, payload);
  }

  updateAddress(uid: string, id: string, payload: any) {
    return this.http.put(`${this.baseUrl}/${uid}/${id}`, payload);
  }

  deleteAddress(uid: string, id: string) {
    return this.http.delete(`${this.baseUrl}/${uid}/${id}`);
  }
}