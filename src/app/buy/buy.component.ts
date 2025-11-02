import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlineserviceService, IProd } from '../onlineservice.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  product?: IProd;
  totalPrice = 0;
  totalSavings = 0;

  addresses = [
    {
      name: 'Pooja',
      phone: '9279682271',
      address: 'F01 - SR Complex, near Sterling Hotel, Hunsamarnhalli, Bangalore, Karnataka - 562110'
    },
    {
      name: 'Ayush',
      phone: '9140280752',
      address: 'Building no-105, Chandan Nagar Colony, Varanasi, Uttar Pradesh - 221005'
    }
  ];

  selectedAddressIndex = 0;
  editMode = false;
  newAddress = '';
  selectedPaymentMode = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: OnlineserviceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    if (id) {
      this.product = this.service.getProductById(id);
      if (this.product) {
        this.totalSavings = Math.floor(this.product.price * 0.25); // 25% discount
        this.totalPrice = this.product.price - this.totalSavings;
      }
    }
  }

  selectAddress(index: number) {
    this.selectedAddressIndex = index;
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveNewAddress() {
    if (this.newAddress.trim()) {
      this.addresses.push({
        name: 'User',
        phone: '9999999999',
        address: this.newAddress
      });
      this.newAddress = '';
      this.editMode = false;
      this.selectedAddressIndex = this.addresses.length - 1;
    }
  }

  selectPaymentMode(mode: string) {
    this.selectedPaymentMode = mode;
  }

  confirmOrder() {
    if (!this.selectedPaymentMode) {
      alert('Please select a payment mode before confirming.');
      return;
    }
    alert(`✅ Order placed successfully via ${this.selectedPaymentMode}!`);
    this.router.navigate(['/thank-you']);
  }
}
