import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dogpark } from '../../models/dogpark';

@Component({
  selector: 'app-dogpark-list-item',
  templateUrl: './dogpark-list-item.component.html',
  styleUrls: ['./dogpark-list-item.component.css']
})
export class DogparkListItemComponent {

  @Input() dogpark: Dogpark;

  constructor() {
  }

}
