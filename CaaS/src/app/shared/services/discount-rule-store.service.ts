import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DiscountRule } from '../entities/discount-rule';

@Injectable({
  providedIn: 'root'
})
export class DiscountRuleStoreService {

  constructor(
    private http: HttpClient
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }  

  getAllDiscountRules(shopid: string): Observable<DiscountRule[]> {
    return this.http.get<DiscountRule[]>(`${environment.server}/shops/${shopid}/discountrules`)
    .pipe(catchError(this.errorHandler));
  }

}
