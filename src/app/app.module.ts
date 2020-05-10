import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,

    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
