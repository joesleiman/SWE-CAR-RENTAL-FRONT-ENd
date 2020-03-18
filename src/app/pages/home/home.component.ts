import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {CarService} from "../../services/car.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todayDate: Date = new Date();
  carData = {
    imageUrl: '../../../assets/images/mercedes.jpeg',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,' +
      ' agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    rentPricePerDay: 75,
    browseUrl: '/booking'
  };

  constructor(private _carService: CarService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  search(event){
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const startFormattedDate = moment(startDate).format("YYYY/MM/DD");
    const endFormattedDate = moment(endDate).format("YYYY/MM/DD");
    this._carService.getAvailableCarsOnDate(startFormattedDate, endFormattedDate)
      .subscribe(
        (availableCars: any)=>{
          this._router.navigate(['/list-cars', availableCars]);
        }
      );
  }
}
