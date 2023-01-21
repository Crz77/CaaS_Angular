import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  deleteProduct(shopid: string, productid: string, appkey: string) {
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.delete<Product>(`${environment.server}/shops/${shopid}/products/${productid}`, {headers})
    .pipe(catchError(this.errorHandler));
  }

  updateProduct(shopid: string, productid: string, categoryid: string, product: Product, appkey: string){
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.put<Product>(`${environment.server}/shops/${shopid}/products/${productid}`, product, {headers})
    .pipe(catchError(this.errorHandler));
  }

  createProduct(shopid: string, product: Product, appkey: string){
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.post<Product>(`${environment.server}/shops/${shopid}/products`, product, {headers})
    .pipe(catchError(this.errorHandler));
  }


}
