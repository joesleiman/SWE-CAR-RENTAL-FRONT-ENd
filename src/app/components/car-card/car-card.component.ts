import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() carImage: string;
  @Input() carRentPricePerDay: number;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
