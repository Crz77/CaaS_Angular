import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Shop } from '../entities/shop';

@Injectable({
  providedIn: 'root'
})
export class StatisticStoreService {

  constructor(
    private http: HttpClient
  ) { }


  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);

  }
    
  getAvgPerOrderForMonth(shopid: string, year: number, month: number, appkey: string) : Observable<number>{
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.get<any>(`${environment.server}/shops/${shopid}/statistics/averagerevenueperorderformonth?year=${year}&month=${month}`, {headers})
    .pipe(catchError(this.errorHandler));
  } 

  getAvgPerOrderForYear(shopid: string, year: number, appkey: string) : Observable<number>{
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.get<any>(`${environment.server}/shops/${shopid}/statistics/averagerevenueperorderforyear?year=${year}`, {headers})
    .pipe(catchError(this.errorHandler));
  } 

  getTotalRevPerOrderForMonth(shopid: string, year: number, month: string, appkey: string) : Observable<number>{
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.get<any>(`${environment.server}/shops/${shopid}/statistics/totalrevenueformonth?year=${year}&month=${month}`, {headers})
    .pipe(catchError(this.errorHandler));
  } 

  getTotalPerOrderForYear(shopid: string, year: number, appkey: string) : Observable<number>{
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.get<any>(`${environment.server}/shops/${shopid}/statistics/totalrevenueforyear?year=${year}`, {headers})
    .pipe(catchError(this.errorHandler));
  } 

  getNumberOfCurrentOpenCarts(shopid: string, appkey: string) : Observable<number>{
    const headers = new HttpHeaders({'appKey': appkey});

    return this.http.get<any>(`${environment.server}/shops/${shopid}/statistics/numberofcurrentcarts`, {headers})
    .pipe(catchError(this.errorHandler));
  } 

}
