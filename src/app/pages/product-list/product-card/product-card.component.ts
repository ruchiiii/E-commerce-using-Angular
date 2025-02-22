import { Component, inject, input } from '@angular/core';
import { Product } from '../../../model/productlist.model';
import { PrimaryButtonComponent } from "../../../component/primary-button/primary-button.component";
import { CartserviceService } from '../../../service/cartservice.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
     <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative">
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
      </div>
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm"> {{ '$' + product().price }}</span>
        <app-primary-button label="Add to Cart" class="mt-3" (handlebtnClicked)="cartService.addToCart(product())" />
     </div>

     <span
        class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
      >
        @if (product().stock) {
        {{ product().stock }} left } @else { Out of stock }
      </span>

    </div>
  `
  ,
  styles: ``
})
export class ProductCardComponent {

  cartService = inject(CartserviceService);

  product = input.required<Product>();
}
