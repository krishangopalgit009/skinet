import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasksetItem } from '../shared/Models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  removeBasketItems(item: IBasksetItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasksetItem) {
    this.basketService.incrementItemQuantity(item);
  }
  
  decrementItemQuantity(item: IBasksetItem) {
    this.basketService.decrementItemQuantity(item);
  }

}
