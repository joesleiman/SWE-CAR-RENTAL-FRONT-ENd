import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {
  carData = {
    imageUrl: '../../../assets/images/mercedes.jpeg',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,' +
      ' agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    rentPricePerDay: 75,
    browseUrl: '/customer'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
