import { Component, OnInit, OnDestroy, Input, EventEmitter, Output, TemplateRef } from '@angular/core';
import { NavigationNode } from './services/navigation.model';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'uxg-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss'],
  host: {
    class: 'uxg-global-nav'
  }
})
export class GlobalNavComponent implements OnInit, OnDestroy {
  @Input() appName!: string;
  @Input() navigationNodes!: NavigationNode[];
  @Input() activeRoute!: string;
  @Input() currentNode!: NavigationNode;
  @Input() brandIcon: string | undefined;
  @Input() appContent!: TemplateRef<any>;
  @Input() navbarAction!: TemplateRef<any>;

  @Output() menuClick = new EventEmitter<void>();
  @Output() brandAction = new EventEmitter<any>();
  @Output() nodeChosen = new EventEmitter<NavigationNode>();
  @Output() logout = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
