import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dogpark } from './models/dogpark';
import { DogparkDataService } from './services/dogpark-data.service';

@Injectable()
export class DogparksResolver implements Resolve<Observable<Dogpark[]>> {

  constructor(
    private dogparkDataService: DogparkDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Dogpark[]> {
    return this.dogparkDataService.getAllDogparks();
  }
}
