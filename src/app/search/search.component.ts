import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProd, OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  prod: IProd[] = [];
  allProducts: IProd[] = [];
searchTerm: string = '';
  constructor(
    private productService: OnlineserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Load all products
    this.allProducts = this.productService.prod;

    // Subscribe to query params
    this.route.queryParamMap.subscribe(params => {
      const searchTerm = params.get('s')?.toLowerCase() || '';
      this.prod = this.allProducts.filter(product =>
        product.pname.toLowerCase().includes(searchTerm)
      );
    });
  }
  onSearch(): void {
    // Your search logic here
    console.log('Searching for:', this.searchTerm);
  }
}
