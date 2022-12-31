import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../entities/cart';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }


  getCartById(shopid: string, cartid:string): Observable<Cart> {
    return this.http.get<any>(`${environment.server}/shops/${shopid}/carts/${cartid}`)
    .pipe(catchError(this.errorHandler));
  }    

  createNewCart(shopid: string): Observable<Cart> {
    return this.http.post<Cart>(`${environment.server}/shops/${shopid}/carts`, shopid)
    .pipe(catchError(this.errorHandler));
  }

  updateCart(shopid: string, cartid:string, couponid?: string) {
    return this.http.put<Cart>(`${environment.server}/shops/${shopid}/carts/${cartid}`, shopid)
    .pipe(catchError(this.errorHandler));
  }

  checkCart(shopid: string) {
    let cartid = this.localStorageService.getCartId(shopid);
    let newCart: Observable<Cart> = this.createNewCart(shopid);

    if(cartid == null){
      newCart.subscribe(res => {
        if(res.cartID == null) return catchError(this.errorHandler);
        
        this.localStorageService.setCartId(shopid, res.cartID);
        return;
      })
    }
  } 

}
