import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/Models/basket';
import { IUser } from 'src/app/shared/Models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$ : Observable<IUser>;

  constructor(private basketService: BasketService, private accoutService: AccountService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accoutService.currentUser$;
  }

  logout() {
    this.accoutService.logout();
  }

}
