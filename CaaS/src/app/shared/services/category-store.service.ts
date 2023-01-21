import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../entities/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryStoreService {

  constructor(
    private http: HttpClient
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }

  getCategoryById(shopid: string, categoryid:string): Observable<Category> {
    return this.http.get<any>(`${environment.server}/shops/${shopid}/categories/${categoryid}`)
    .pipe(catchError(this.errorHandler));
  }   

}
