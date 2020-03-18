import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {CarService} from "../../services/car.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carData = {
    imageUrl: '../../../assets/images/mercedes.jpeg',
  };
  public carsData: any = [];
  todayDate: Date = new Date();

  constructor(private _carService: CarService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.carsData = params.get('availableCars');
    });
  }

  search(event){
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const startFormattedDate = moment(startDate).format("YYYY/MM/DD");
    const endFormattedDate = moment(endDate).format("YYYY/MM/DD");
    let differenceInTime = startDate.getTime() - endDate.getTime();
    // To calculate the no. of days between two dates
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    this._carService.getAvailableCarsOnDate(startFormattedDate, endFormattedDate)
      .subscribe(
        (cars: any)=>{
          this._router.navigate(['/list-cars', {availableCars: cars, numberRentDays: differenceInDays}]);
        }
      );
  }

  goToCustomer(event){
    this._router.navigate(['/booking', event]);
  }
}
