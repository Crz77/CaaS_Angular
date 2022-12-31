import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartItem } from '../entities/cart-item';

@Injectable({
  providedIn: 'root'
})

export class CartItemService {

  constructor(private http: HttpClient) { }

  private errorHandler(error: Error | any): Observable<any> {
    console.log(error);
    return of(null);
  }


  getAllCartItemsByCart(shopid: string, cartid: string) {
    return this.http.get<CartItem[]>(`${environment.server}/shops/${shopid}/carts/${cartid}/cartitems`)
    .pipe(catchError(this.errorHandler));
  }

  getCartItemById(shopid: string, cartid: string, productid:string){
    return this.http.get<CartItem[]>(`${environment.server}/shops/${shopid}/carts/${cartid}/${productid}`)
    .pipe(catchError(this.errorHandler));
  }

  createCartItemByShopId(shopid: string, cartid: string, cartitem: CartItem) {
    return this.http.post<CartItem>(`${environment.server}/shops/${shopid}/carts/${cartid}/cartitems`, cartitem)
    .pipe(catchError(this.errorHandler));
  }

  updateCartItemById(shopid: string, cartid: string, productid: string, cartitem: CartItem) {
    return this.http.put<CartItem>(`${environment.server}/shops/${shopid}/carts/${cartid}/cartitems/${productid}`,cartitem)
    .pipe(catchError(this.errorHandler));
  }
  
  deleteCartItem(shopid: string, cartid: string, productid: string) {
    return this.http.delete<CartItem>(`${environment.server}/shops/${shopid}/carts/${cartid}/cartitems/${productid}`)
    .pipe(catchError(this.errorHandler));
  }

}
