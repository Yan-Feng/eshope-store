import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { environment } from 'src/environments/environment';
import { product } from '../models/product';

fdescribe('ProductService', () => {
  const products = [
    { id: 1, name: 'P1' },
    { id: 2, name: 'P2' }
  ];

  let service: ProductService;
  let httpMock: HttpTestingController;
  let endpoint: string  = environment.apiUrl + '/products';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Product[]>', () => {

    service.getProducts().subscribe(result => {
      expect(result).not.toBe(null);
      expect(result).toEqual(products);
    }, fail);

    const req = httpMock.expectOne(endpoint);
    req.flush(products);

  });

  it('should create a product', () => {
    const prod: product = {name : 'p3', id:null};

    service.addProduct(prod).subscribe(result => {
      expect(result).not.toBe(null);
      expect(result).toEqual(prod);
    }, fail);

    const req = httpMock.expectOne(endpoint);
    req.flush(prod);
  });

  it('should delete the product', () => {
    service.deleteProduct(1).subscribe(
      result => expect(result).toBe(msg),
      fail
      );

    const req = httpMock.expectOne(`${endpoint}/1`);
    
    const msg = 'success';
    req.flush(msg, { status: 200, statusText: 'success' });

  });


});
