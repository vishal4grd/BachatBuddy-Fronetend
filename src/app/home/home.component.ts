import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private groupBuyingService: GroupBuyingService,
    private router: Router
  ) {}

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
      this.router.navigate(['/login']);
      return;
    }

    this.groupBuyingService.joinGroupByIds(Number(userId), productId).subscribe({
      next: (response) => {
        alert(response.message);
        if (response.success) {
          this.loadGroupBuyingProducts(); // Refresh the products
        }
      },
      error: (err) => {
        console.error('Error joining group:', err);
        alert('Failed to join group. Please try again.');
      }
    });
  }
}