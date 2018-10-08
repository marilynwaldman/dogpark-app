import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dogpark } from '../../models/dogpark';
import { ActivatedRoute,  ParamMap, Params } from '@angular/router';
import { DogparkDataService } from '../../services/dogpark-data.service';
import {map, switchMap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Component(
  {
    selector: 'app-dogpark-list',
    templateUrl: './dogpark-list.component.html',
    styleUrls: ['./dogpark-list.component.css']
  }
)
export class DogparkListComponent {

  @Input()
  dogpark: Dogpark;
  dogparks: Dogpark[] = [];
  id: string;


  constructor(
    private route: ActivatedRoute,
    private dogparkService: DogparkDataService
    ) {}


    private ngOnInit() {

      this.route.queryParams.subscribe(params => {
        console.log(params);
        this.id = params['id'];
      });
      this.dogparkService.getDogparkById(Number(this.id)).subscribe(
        dogpark =>  {
          this.dogpark = dogpark;
        }
      );

    }


}
