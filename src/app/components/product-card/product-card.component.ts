import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

@Input() product!: Product;
@Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();

constructor(private sharingDataService: SharingDataService){

}

onAddCart(product: Product){
this.productEventEmitter.emit(product);
}

}
