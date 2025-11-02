import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number = 0): number {
    if (!price || discount <= 0) return price;
    const discounted = price - (price * discount) / 100;
    return Math.round(discounted);
  }
}