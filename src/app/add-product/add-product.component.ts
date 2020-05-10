import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() afterAddProduct = new EventEmitter<void>();

  productForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });

  constructor(private api : ProductService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.productForm.invalid){
      this.api.addProduct(this.productForm.value).subscribe(resp => {
        this.productForm.reset();
        this.afterAddProduct.emit();
      })
    }
  }


}
