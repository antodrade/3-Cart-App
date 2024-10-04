import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
})
export class CartModalComponent {
@Input() items: CartItem[] = [];
@Input() total = 0;

@Output() idProductEventEmitter = new EventEmitter();
@Output() closeEventEmmiter = new EventEmitter();

onDeleteCart(id: number){
  this.idProductEventEmitter.emit(id);
}

closeCart(): void{
  this.closeEventEmmiter.emit() ;
}

}