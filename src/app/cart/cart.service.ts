import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../models/product';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl = environment.apiUrl + "/cart";
 // private apiCheckoutUrl = environment.apiUrl + "/checkout";

  
  constructor(private http: HttpClient ) { }

  addToCart(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiCartUrl, product);
  }

   getCartItems() : Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  
  clearCart() : Observable<void> {
    return this.http.delete<void>(this.apiCartUrl);
  }

  // checkout(products: Product[]) : Observable<void> {
  //   return this.http.post<void>(this.apiCheckoutUrl, products);
  // }

  
}
