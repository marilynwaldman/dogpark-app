import { Component, OnInit } from '@angular/core';
import { DogparkDataService } from '../../services/dogpark-data.service';
import { Dogpark } from '../../models/dogpark';
import { ActivatedRoute } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dogparks',
  templateUrl: './dogparks.component.html',
  styleUrls: ['./dogparks.component.css'],
  providers: [DogparkDataService]
})
export class DogparksComponent implements OnInit {

  dogparks: Dogpark[] = [];

  constructor(
    private dogparkDataService: DogparkDataService,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.route.data
      .pipe(map((data) => data['dogparks']))
      .subscribe(
        (dogparks) => {
          this.dogparks = dogparks;
        }
      );
  }

  onAddDogpark(dogpark) {
    this.dogparkDataService
      .addDogpark(dogpark)
      .subscribe(
        (newDogpark) => {
          this.dogparks = this.dogparks.concat(newDogpark);
        }
      );
  }



}
