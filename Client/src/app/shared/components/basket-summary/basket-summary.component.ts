import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasksetItem } from '../../Models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.css']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<IBasksetItem> = new EventEmitter<IBasksetItem>();
  @Output() increment: EventEmitter<IBasksetItem> = new EventEmitter<IBasksetItem>();
  @Output() remove: EventEmitter<IBasksetItem> = new EventEmitter<IBasksetItem>();
  @Input() isBasket = true;


  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasksetItem) {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasksetItem) {
    this.increment.emit(item);
  }

  removeBasketItems(item: IBasksetItem) {
    this.remove.emit(item);
  }
}
