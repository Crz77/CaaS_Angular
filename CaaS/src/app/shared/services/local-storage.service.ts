import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getCartId(shopid: string) {
    return localStorage.getItem(shopid + 'cartid');
  }

  setCartId(shopid: string, cartid: string) {
    localStorage.setItem(shopid + 'cartid', cartid.toString());
  }

}
