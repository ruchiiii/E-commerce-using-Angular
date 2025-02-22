import { Injectable, signal } from '@angular/core';
import { Product } from '../model/productlist.model';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

 cart = signal<Product[]>([]);

 addToCart(product : Product){
  this.cart.set([...this.cart(),product]);
 }

 removeFromCart(product : Product){
 this.cart.set(this.cart().filter(i=>i.id !== product.id));
 }

 constructor(){ }
}
