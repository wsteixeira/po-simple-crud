import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }],
  };

  constructor() {}

  ngOnInit(): void {}
}
