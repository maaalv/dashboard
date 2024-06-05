import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nova-dev-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent {}
