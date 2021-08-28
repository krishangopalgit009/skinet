import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketTotals, IBasksetItem } from '../shared/Models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;
  basketTotals$: Observable<IBasketTotals>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.basketTotals$ = this.basketService.basketTotal$;
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
