import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getDiscountRule(shopid: string, ruleid: string): Observable<DiscountRule> {
    return this.http.get<DiscountRule>(`${environment.server}/shops/${shopid}/discountrules/${ruleid}`)
    .pipe(catchError(this.errorHandler))
  }

  deleteDiscountRule(shopid: string, ruleid: string, appkey: string){
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.delete<DiscountRule>(`${environment.server}/shops/${shopid}/discountrules/${ruleid}`, {headers})
    .pipe(catchError(this.errorHandler));
  }

  updateDiscountRule(shopid: string, ruleid: string, rule: DiscountRule, appkey: string) {
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.put<DiscountRule>(`${environment.server}/shops/${shopid}/discountrules/${ruleid}`, rule, {headers})
    .pipe(catchError(this.errorHandler));
  }

  createDiscountRule(shopid: string, rule: DiscountRule, appkey: string){
    const headers = new HttpHeaders({'appKey': appkey});
    
    return this.http.post<DiscountRule>(`${environment.server}/shops/${shopid}/discountrules`, rule, {headers})
    .pipe(catchError(this.errorHandler));
  }
}
