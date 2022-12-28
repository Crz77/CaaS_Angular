import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }
    

  getAllProducts(shopid:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.server}/shops/${shopid}/products`)
    .pipe(catchError(this.errorHandler));
  }

  getProductById(shopid: string, productid:string): Observable<Product> {
    return this.http.get<any>(`${environment.server}/shops/${shopid}/products/${productid}`)
    .pipe(catchError(this.errorHandler));
  }    

  getAllActiveProducts(shopid:string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.server}/shops/${shopid}/products?onlyActive=true`)
    .pipe(catchError(this.errorHandler));
  }


}
