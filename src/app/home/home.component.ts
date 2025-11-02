import { Component, OnInit } from '@angular/core';
import { OnlineserviceService, IProd } from '../onlineservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OnlineserviceService]
})
export class HomeComponent implements OnInit {
  prod: any[] = [];
  popularProducts = [
  {
    pimage: 'assets/earbuds.jpg',
    pname: 'Bluetooth Earbuds',
    price: 1999,
  },
  {
    pimage: 'assets/ricebag.jpg',
    pname: '5kg Premium Rice',
    price: 450,
  },
   {
    pimage: 'assets/mixer.jpg',
    pname: '500W Mixer Grinder',
    price: 2599,
  },
  {
    pimage: 'assets/oil.jpg',
    pname: '1L Sunflower Oil (Pack of 2)',
    price: 320,
  },
  {
    pimage: 'assets/sneaker.jpg',
    pname: 'Casual Sneakers (Men)',
    price: 999,
  },
  {
    pimage: 'assets/tshirt.jpg',
    pname: 'Cotton T-shirt (Combo of 3)',
    price: 799,
  },
  {
    pimage: 'assets/maggie.jpg',
    pname: 'Maggi Noodles (12 Pack)',
    price: 180,
  },
  {
    pimage: 'assets/detergent.jpg',
    pname: '1kg Detergent Powder',
    price: 120,
  },
  {
    pimage: 'assets/toothpaste.jpg',
    pname: 'Toothpaste Value Pack (3x150g)',
    price: 210,
  },
 
  // add more products as needed
];

  constructor(private service: OnlineserviceService) {}

  ngOnInit(): void {
    // this.service.showproduct().subscribe((result: IProd[]) => {
    //   this.prod = result.map((p: IProd) => ({
    //     ...p,
    //     joined: this.randomJoin(p.qty), // use method below
    //     required: p.qty,
    //     groupPrice: Math.floor(p.price * 0.8),
    //     originalPrice: p.price
    //   }));
    // });
  }

  randomJoin(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
