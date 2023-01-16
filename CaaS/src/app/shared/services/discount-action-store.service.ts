import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DiscountAction } from '../entities/discount-action';

@Injectable({
  providedIn: 'root'
})

export class DiscountActionStoreService {

  constructor(
    private http: HttpClient
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }  

  getAllDiscountActions(shopid: string): Observable<DiscountAction[]> {
    return this.http.get<DiscountAction[]>(`${environment.server}/shops/${shopid}/discountrules`)
    .pipe(catchError(this.errorHandler));
  }
}
