import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCommonService {

  constructor(private http: HttpClient) { }
  
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  post(url: string, body: any, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.post<any>(url, body, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  get(url: string, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.get<any>(url, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  put(url: string, body: any, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.put<any>(url, body, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(url: string, headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    return this.http.delete<any>(url, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

}
