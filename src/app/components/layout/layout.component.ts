import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'nova-dev-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenuComponent,
    SidebarComponent,
    BreadcrumbModule,
  ],
  templateUrl: './layout.component.html',
  styles: `
  :host ::ng-deep .p-breadcrumb {
    background: none;
    margin-left: -10px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Beratung' },
      { label: 'Angebot' },
      { label: 'Familie Hörzich' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
