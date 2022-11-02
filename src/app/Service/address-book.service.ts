import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressBookService {
  baseUrl = environment.url;
  constructor(private http: HttpClient) {}

  saveAddressBook(addressData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, addressData);
  }

  getAddressBookData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookdata`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${id}`);
  }

  updateData(id: number, addressData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${id}`, addressData);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove/${id}`);
  }
}
