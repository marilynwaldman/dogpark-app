import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

import { Dogpark } from '../models/dogpark';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
  private  httpClient:  HttpClient
  ) {}

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  public getAllDogparks(): Observable<any> {
    return this.httpClient.get(API_URL + '/dogparks').pipe(
      map(this.extractData));
  }


  public getDogparkById(dogparkId: number):  Observable<any> {
    return this.httpClient.get(API_URL + '/dogparks/' + dogparkId).pipe(
      map(this.extractData));
  }

  public createDogpark(dogpark: Dogpark): Observable<any> {
    console.log(dogpark);
    return this.httpClient.post<any>(API_URL + '/dogparks', JSON.stringify(dogpark), httpOptions).pipe(
      tap((d) => console.log(`added dogpark w/ id=${d.id}`)),
      catchError(this.handleError<any>('createDogpark'))
    );
  }

  public updateDogpark(dogpark: Dogpark): Observable<any> {
    return this.httpClient.put(API_URL + '/dogparks/' + dogpark.id, JSON.stringify(dogpark), httpOptions).pipe(
      tap(_ => console.log(`updated dogpark id=${dogpark.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  public deleteDogparkById(dogparkId: number): Observable<any> {
    return this.httpClient.delete<any>(API_URL + '/dogparks/' + dogparkId, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${dogparkId}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

