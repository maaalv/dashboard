import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TableModule,
  TableRowCollapseEvent,
  TableRowExpandEvent,
} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'nova-dev-beratung-table',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    ToastModule,
    RatingModule,
    ButtonModule,
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './beratung-table.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductService, MessageService],
})
export class BeratungTableComponent implements OnInit {
  products!: Product[];

  expandedRows: any = {};

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.productService.getProductsWithOrdersSmall().then((data) => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }

  expandAll() {
    // rewrite the expandedRows object to expand all rows
    // without reduce function
    this.products.forEach((p) => {
      if (p.id !== undefined) this.expandedRows[p.id] = true;
    });
    // this.expandedRows = this.products.reduce(
    //   (acc, p) => (acc[p.id] = true) && acc,
    //   {}
    // );
  }

  collapseAll() {
    this.expandedRows = {};
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null; // Add a default return statement to handle any other cases
    }
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'DELIVERED':
        return 'success';
      case 'CANCELLED':
        return 'danger';
      default:
        return null; // Add a default return statement to handle any other cases
    }
  }

  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Expanded',
      detail: event.data.name,
      life: 3000,
    });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Product Collapsed',
      detail: event.data.name,
      life: 3000,
    });
  }
}
