import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-dev-beratung-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beratung-detail.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeratungDetailComponent {}
