import { Injectable } from '@angular/core';
import { Dogpark } from '../models/dogpark';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DogparkDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /dogparks
  addDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return this.api.createDogpark(dogpark);
  }

  // Simulate DELETE /dogparks/:id
  deleteDogparkById(dogparkId): Observable<Dogpark> {
    return this.api.deleteDogparkById(dogparkId);
  }

  // Simulate PUT /dogparks/:id
  updateDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return this.api.updateDogpark(dogpark);
  }

  // Simulate GET /dogparks
  getAllDogparks(): Observable<Dogpark[]> {
    return this.api.getAllDogparks().pipe(delay(3000));
  }

  // Simulate GET /dogparks/:id
  getDogparkById(dogparkId: number): Observable<Dogpark> {
    return this.api.getDogparkById(dogparkId);
  }



}

