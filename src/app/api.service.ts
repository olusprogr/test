import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
  ) { }

  public requestProductsFromAPI(path: string = '/getProducts/'): Observable<any[]> {
    console.log('Requesting products from API...');
    return this.http.get<any[]>(this.baseURL + path);
  }
}