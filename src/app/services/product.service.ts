import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { product } from '../models/product';
import { throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint: string  = environment.apiUrl + '/products';

  public afterProductsChanged = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get<product[]>(this.endpoint).pipe(
      catchError(this.errorHandler)
    );
  }

  addProduct(value:product){
    return this.http.post(this.endpoint, value).pipe(
      tap(()=> this.afterProductsChanged.next(null)),
      catchError(this.errorHandler)
    );
  }

  deleteProduct(id:number){
    return this.http.delete(`${this.endpoint}/${id}`).pipe(
      tap(()=> this.afterProductsChanged.next(null)),
      catchError(this.errorHandler)
    );
  }


  private errorHandler(error: HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }

}
