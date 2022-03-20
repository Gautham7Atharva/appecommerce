import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, ) { 

  }

  getCategories() {
    let url = 'https://fakestoreapi.com/products/categories';
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get<any>(url, { headers: headers }).pipe(
      catchError(this.handleError)
    );
  }
  
  getAllProductsByCategories(category: string) {
    let url = 'https://fakestoreapi.com/products/category/' + category;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get<any>(url, { headers: headers }).pipe(
      catchError(this.handleError)
    );
  }

  
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
