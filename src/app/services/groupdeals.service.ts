import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GroupDeal {
  id: number;
  productName: string;
  originalPrice: number;
  discountedPrice: number;
  maxParticipants: number;
  currentParticipants: number;
  pimage?: string;
  status: string; // e.g., "OPEN", "COMPLETED"
}

@Injectable({
  providedIn: 'root'
})
export class GroupdealsService {
  private baseUrl = 'http://localhost:8080/api/group-deals';

  constructor(private http: HttpClient) {}

  // Fetch all group deals
  getAllDeals(): Observable<GroupDeal[]> {
    return this.http.get<GroupDeal[]>(`${this.baseUrl}`);
  }

  // Join a specific group deal
  joinDeal(dealId: number, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${dealId}/join`, { userId });
  }

  // Get details of a specific deal
  getDealById(dealId: number): Observable<GroupDeal> {
    return this.http.get<GroupDeal>(`${this.baseUrl}/${dealId}`);
  }

  // Notify users when group is about to complete
  sendNotification(dealId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${dealId}/notify`, {});
  }
}