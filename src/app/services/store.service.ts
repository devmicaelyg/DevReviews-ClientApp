import { Store } from './../models/Store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Store[]> {
      return this.http.get<Store[]>('http://localhost:5000/api/store');
  }
}
