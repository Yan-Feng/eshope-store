import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(public dialog: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) { }

  ngOnInit(): void {
  }

}
