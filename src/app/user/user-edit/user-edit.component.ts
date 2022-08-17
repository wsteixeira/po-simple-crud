import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb, PoBreadcrumbItem } from '@po-ui/ng-components';

import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  readonly actions: PoPageDynamicEditActions = {
    cancel: '/user',
    save: '/user',
    saveNew: '/user/new',
  };

  readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Usuário', link: '/user' },
    ],
  };

  readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { property: 'firstName', label: 'Nome', required: true },
    { property: 'lastName', label: 'Sobrenome', required: true },
    {
      property: 'email',
      label: 'E-mail',
      icon: 'po-icon-mail',
      required: true,
    },
    {
      property: 'password',
      label: 'Senha',
      secret: true,
      required: true,
    },
    {
      property: 'isActive',
      label: 'Ativo',
      type: 'boolean',
      booleanTrue: 'Sim',
      booleanFalse: 'Não',
    },
  ];

  apiService!: string;
  breadcrumbItem!: PoBreadcrumbItem;
  currentId: any;
  isUpdate = false;
  title!: string;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isUpdate = false;
    this.apiService = this.userService.getEndpoint();

    // Carrega o registro pelo ID
    this.activatedRoute.params.subscribe((pars) => {
      this.currentId = pars['id'];

      // Se nao tiver o ID definido sera um CREATE
      if (this.currentId === undefined) {
        this.isUpdate = false;
        this.title = 'Incluir Usuário';
      } else {
        this.isUpdate = true;
        this.title = 'Editar Usuário';
      }
      this.setBreadcrumb();
    });
  }

  private setBreadcrumb(): void {
    this.breadcrumbItem = { label: this.title.split(' ')[0] };
    this.breadcrumb.items.push(this.breadcrumbItem);
  }
}
