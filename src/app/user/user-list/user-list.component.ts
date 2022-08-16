import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

import {
  PoPageDynamicTableActions,
  PoPageDynamicTableFilters,
} from '@po-ui/ng-templates';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  readonly actions: PoPageDynamicTableActions = {
    detail: '/user/detail/:id',
    duplicate: '/user/new',
    edit: '/user/edit/:id',
    new: '/user/new',
    remove: true,
    removeAll: true,
  };

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Usuário' }],
  };

  readonly fields: Array<PoPageDynamicTableFilters> = [
    { property: 'id', key: true, visible: false },
    {
      property: 'firstName',
      label: 'Nome',
      duplicate: true,
    },
    { property: 'lastName', label: 'Sobrenome', duplicate: true },
    { property: 'email', label: 'E-mail', duplicate: true },
    {
      property: 'isActive',
      label: 'Ativo',
      type: 'boolean',
      duplicate: true,
    },
  ];

  apiService!: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.apiService = this.userService.getEndpoint();
  }
}
