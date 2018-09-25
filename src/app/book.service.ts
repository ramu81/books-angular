import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks() {
    const url = 'http://localhost:8080/books';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:secret123') });
    return this.http.get(url, { headers });
  }
}