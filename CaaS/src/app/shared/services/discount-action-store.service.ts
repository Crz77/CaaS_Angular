import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<DiscountAction[]>(`${environment.server}/shops/${shopid}/discountactions`)
    .pipe(catchError(this.errorHandler));
  }

  deleteDiscountAction(shopid: string, actionid: string, appkey: string){
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.delete<DiscountAction>(`${environment.server}/shops/${shopid}/discountactions/${actionid}`, {headers})
    .pipe(catchError(this.errorHandler));
  }

  updateDiscountAction(shopid: string, actionid: string, action: DiscountAction, appkey: string) {
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.put<DiscountAction>(`${environment.server}/shops/${shopid}/discountactions/${actionid}`, action, {headers})
    .pipe(catchError(this.errorHandler));
  }

  createDiscountAction(shopid: string, action: DiscountAction, appkey: string){
    const headers = new HttpHeaders({'appKey': appkey});
    
    return this.http.post<DiscountAction>(`${environment.server}/shops/${shopid}/discountactions`, action, {headers})
    .pipe(catchError(this.errorHandler));
  }
}
