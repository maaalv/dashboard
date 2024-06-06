import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenuItem } from 'primeng/api';

// !! 100% GENERATED CODE -- DO NOT MODIFY !!

@Component({
  selector: 'nova-dev-sidebar',
  standalone: true,
  imports: [CommonModule, MenuModule, AvatarModule, BadgeModule],
  templateUrl: './sidebar.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        separator: true,
      },
      {
        label: 'Beratungen',
        items: [
          {
            label: 'Neue',
            icon: 'pi pi-plus',
            shortcut: '⌘+N',
          },
          {
            label: 'Aktive',
            icon: 'pi pi-check',
            shortcut: '⌘+S',
          },
          {
            label: 'Alle',
            icon: 'pi pi-list',
            shortcut: '⌘+S',
          },
        ],
      },
      {
        label: 'Anträge',
        items: [
          {
            label: 'Pendenzen',
            icon: 'pi pi-cog',
            // shortcut: '⌘+O',
            badge: '9',
          },

          {
            label: 'Warten',
            icon: 'pi pi-inbox',
            badge: 'Neu',
          },
          {
            label: 'Alle',
            icon: 'pi pi-list',
          },
        ],
      },
      {
        label: 'Underwriting',
        items: [
          {
            label: 'Pendenzen',
            icon: 'pi pi-cog',
            // shortcut: '⌘+O',
            badge: '9',
          },

          {
            label: 'Warten',
            icon: 'pi pi-inbox',
            badge: 'Neu',
          },
          {
            label: 'Alle',
            icon: 'pi pi-list',
          },
        ],
      },
      {
        label: 'Benutzer',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
          },
        ],
      },
      {
        separator: true,
      },
    ];
  }
}
