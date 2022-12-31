import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../entities/order';
import { OrderForCreation } from '../entities/order-for-creation';

@Injectable({
  providedIn: 'root'
})
export class OrderStoreService {

  constructor(
    private http: HttpClient
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  createNewOrder(shopid: string, cartid: string, orderForCreation: OrderForCreation): Observable<Order> {
    return this.http.post<any>(`${environment.server}/shops/${shopid}/orders?cartid=${cartid}`, orderForCreation)
    .pipe(catchError(this.errorHandler));
  }
}
