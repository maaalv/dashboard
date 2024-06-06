import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BeratungTableComponent } from '../table/beratung-table.component';
import { DividerModule } from 'primeng/divider'

@Component({
  selector: 'nova-dev-beratung-list',
  standalone: true,
  imports: [CommonModule, CardModule, BeratungTableComponent, DividerModule],
  templateUrl: './beratung-list.component.html',
  styles: `
  :host ::ng-deep .p-card {
    // @apply border-l-2 border-green-400;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeratungListComponent {}
