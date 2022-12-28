import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../entities/product';
import { Shop } from '../entities/shop';

@Injectable({
  providedIn: 'root'
})

export class ShopStoreService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }
    

  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`${environment.server}/shops`)
    .pipe(catchError(this.errorHandler));
  }

  getShopById(shopid: string): Observable<Shop> {
    return this.http.get<any>(`${environment.server}/shops/${shopid}`)
    .pipe(catchError(this.errorHandler));
  }    


  search(shopid:string, searchTerm: string): Observable<Product[]> {
    return this.http
    .get<Product[]>(`${environment.server}/shops/${shopid}/products?searchString=${searchTerm}`)
    .pipe(retry(3), 
    catchError(this.errorHandler));
  }
  

}
 