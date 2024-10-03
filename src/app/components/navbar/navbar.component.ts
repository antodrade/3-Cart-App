import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
@Input() items: CartItem[]=[];
@Output() openEventEmmiter = new EventEmitter();

openCart(): void{
  this.openEventEmmiter.emit() ;
}
}
