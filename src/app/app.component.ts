import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    {
      icon: 'po-icon po-icon-home',
      label: 'Home',
      link: '/home',
      shortLabel: 'Home',
    },
    {
      icon: 'po-icon po-icon-users',
      label: 'Cadastro de Usuários',
      link: '/user',
      shortLabel: 'Usuários',
    },
  ];
}
