import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dogpark } from '../../models/dogpark';

@Component(
  {
    selector: 'app-dogpark-list',
    templateUrl: './dogpark-list.component.html',
    styleUrls: ['./dogpark-list.component.css']
  }
)
export class DogparkListComponent {

  @Input()
  dogparks: Dogpark[];


  constructor() {

  }

}
