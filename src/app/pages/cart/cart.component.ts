import { Component, inject, signal } from '@angular/core';
import { CartserviceService } from '../../service/cartservice.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../../model/productlist.model';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent,OrderSummaryComponent],
  template: `
    <div class="p-6 flex flex-col gap-4">
      <h2 class="text-2xl">Shopping cart</h2>

      @for (item of cartService.cart(); track item.id) {
      <app-cart-item [item]="item" />
      }
      <app-order-summary />
  `,
  styles: ``
})
export class CartComponent {

  cartService = inject(CartserviceService);
}
