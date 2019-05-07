import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/models/Company';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl = 'https://www.xfm.dk/itm';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies.json`);
  }
}
