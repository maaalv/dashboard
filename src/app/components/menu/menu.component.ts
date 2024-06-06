import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';

// !! 100% GENERATED CODE -- DO NOT MODIFY !!

@Component({
  selector: 'nova-dev-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    AvatarModule,
    BadgeModule,
    InputTextModule,
  ],
  templateUrl: './menu.component.html',
  styles: [
    `
      .logo {
        @apply ml-2 mr-4 rounded-xl;
        width: 55px;
        height: 55px;
        // margin: 100px;
        // margin-x: 10px;
        background-color: red;
        background: url('./public/nova-dev.webp');
        background-size: 200%;
        background-position: center;
        // background-position: -50%, -50%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Fach',
        icon: 'pi pi-home',
      },
      {
        label: 'Dev',
        icon: 'pi pi-star',
      },
      {
        label: 'Pocs',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Performance',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Temporalität',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            label: 'Prozess',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
          // {
          //   separator: true,
          // },
        ],
      },
      {
        label: 'Task Steuerung',
        icon: 'pi pi-th-large',
        items: [
          {
            label: 'Antragsverarbeitung',
            icon: 'pi pi-book',
            shortcut: '⌘+Q',
          },
          {
            label: 'Underwriting',
            icon: 'pi pi-book',
            shortcut: '⌘+Q',
          },
          {
            label: 'Beratung',
            icon: 'pi pi-book',
            shortcut: '⌘+Q',
          },
          {
            label: 'Support',
            icon: 'pi pi-book',
            shortcut: '⌘+Q',
          },
        ],
      },
      {
        label: 'Live Daten',
        icon: 'pi pi-chart-bar',
        items: [
          {
            label: 'Fachliche Vorgänge',
            icon: 'pi pi-chart-bar',
          },
          {
            label: 'Events',
            icon: 'pi pi-chart-line',
          },
          {
            label: 'Debug',
            icon: 'pi pi-chart-line',
            items: [
              {
                label: 'Events',
              },
              {
                label: 'Errors',
                items: [
                  {
                    label: 'Promos Diffs',
                  },
                  {
                    label: 'DKS Writes',
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   label: 'Pocs',
      //   icon: 'pi pi-envelope',
      //   badge: 'Neu',
      //   items:
      // },
    ];
    // this.items = [];
  }
}
