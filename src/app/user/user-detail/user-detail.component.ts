import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

import {
  PoPageDynamicDetailActions,
  PoPageDynamicDetailField,
} from '@po-ui/ng-templates';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  readonly actions: PoPageDynamicDetailActions = {
    back: '/user',
    edit: '/user/edit/:id',
    remove: '/user',
  };

  readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Usuário', link: '/user' },
      { label: 'Detalhe' },
    ],
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', key: true, visible: false },
    { property: 'firstName', label: 'Nome' },
    { property: 'lastName', label: 'Sobrenome' },
    { property: 'email', label: 'E-mail' },
    { property: 'isActive', label: 'Ativo', type: 'boolean' },
  ];

  apiService!: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.apiService = this.userService.getEndpoint();
  }
}
