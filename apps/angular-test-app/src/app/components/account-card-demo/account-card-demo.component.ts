import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Account } from '@finastra/angular-components/cards/account-card';

@Component({
  selector: 'ffdc-account-card-demo',
  templateUrl: './account-card-demo.component.html',
  styleUrls: ['./account-card-demo.component.scss']
})
export class AccountCardDemoComponent implements OnInit {
  accounts: Account[] = [
    {
      name: 'France',
      currency: 'EUR',
      balance: 50000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      name: 'USA',
      currency: 'USD',
      balance: 750000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      name: 'UK',
      currency: 'GBP',
      balance: 80000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      name: 'China',
      currency: 'CNY',
      balance: 70000,
      number: 'DE89 3704 0044 0532 0130 00'
    }
  ];
  accounts$ = new Subject();
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.accounts$.next(this.accounts);
    }, 1500);
  }

  onClick(event: any) {
    console.log(event);
  }
}
