import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {
  carData = {
    imageUrl: '../../../assets/images/mercedes.jpeg',
  };
  public carsData: any = [];
  public differenceInDays;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.carsData = params.get('availableCars');
      this.differenceInDays = params.get('numberRentDays');
      this.carsData.differenceInDays = this.differenceInDays;
    });
  }
  goToCustomer(event){
    this._router.navigate(['/booking', event]);
  }

}
