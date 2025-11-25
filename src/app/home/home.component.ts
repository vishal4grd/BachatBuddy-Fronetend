import { Component, OnInit } from '@angular/core';
import { GroupBuyingService } from '../services/group-buying.service';
import { GroupBuyingProduct } from '../models/group-buying.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularProducts: GroupBuyingProduct[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private groupBuyingService: GroupBuyingService) { }

  ngOnInit(): void {
    this.loadGroupBuyingProducts();
  }

  loadGroupBuyingProducts(): void {
    this.loading = true;
    this.groupBuyingService.getAllActiveGroupBuys().subscribe({
      next: (products) => {
        this.popularProducts = products;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading group buying products:', err);
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
      }
    });
  }

  joinGroup(productId: number): void {
    const userId = sessionStorage.getItem('uid');

    if (!userId) {
      alert('Please login to join a group!');
      return;
    }

    this.groupBuyingService.joinGroupByIds(Number(userId), productId).subscribe({
      next: (response) => {
        if (response.success) {
          alert(response.message);
          this.loadGroupBuyingProducts(); // Refresh the products
        } else {
          alert(response.message);
        }
      },
      error: (err) => {
        console.error('Error joining group:', err);
        alert('Failed to join group. Please try again.');
      }
    });
  }
}
