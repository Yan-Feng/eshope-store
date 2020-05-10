import { Component, OnInit } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { product } from '../models/product';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<product[]>;

  constructor(private api: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.api.afterProductsChanged.subscribe(() => {
      this.products$ = this.api.getProducts();
    });
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.api.deleteProduct(id).subscribe(()=> {
        });
      }
    });
  }

}
