import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-dev-angebot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angebot.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngebotComponent {}
