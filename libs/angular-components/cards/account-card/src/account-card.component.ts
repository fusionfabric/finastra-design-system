import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uxg-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit, OnDestroy {
  selected: boolean = false;
  @Input() name?: string;
  @Input() balance?: number;
  @Input() currency?: string;
  @Input() number?: string;
  @Input() icon = 'credit_card';
  @Input() iconAriaLabel = 'Credit Card';
  @Input() selectable?: boolean;
  @Input() selectedWithCheckIcon?: boolean;
  @Output() onClick = new EventEmitter<boolean>();

  ngOnInit() {}
  ngOnDestroy() {}

  public onCardClick(selected: boolean) {
    if (this.selectable) {
      this.selected = !selected;
      this.onClick.emit(this.selected);
    }
  }
}

// Skeleton
@Component({
  selector: 'uxg-account-card-skeleton',
  templateUrl: './account-card.skeleton.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardSkeletonComponent {}
