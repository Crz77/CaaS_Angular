import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../entities/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerStoreService {

  constructor(
    private http: HttpClient
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }  

  getCustomerByShopId(shopid: string, customerid: string): Observable<Customer> {
    return this.http.get<Customer>(`${environment.server}/shops/${shopid}/customers/${customerid}`)
    .pipe(catchError(this.errorHandler));
  }

}
