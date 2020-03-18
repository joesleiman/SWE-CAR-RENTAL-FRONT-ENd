import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { StateOfUSA } from '../../enum/states-of-usa.enumeration';
import {CustomerService} from "../../services/customer.service";
import {PaymentService} from "../../services/payment.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  customerFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  isLinear = true;
  public StateOfUSA = StateOfUSA;
  private _bookingData = {
    referenceNumber: null,
    bookingDate: new Date(),
    startDate: null,
    endDate: null,
    totalPrice: 0,
    bookingStatus: null,
    car: {
      cardId: 0
    },
    payment: {
      paymentId: null,
      billingAddress: {
        addressId: null
      }
    },
    customer: {
      customerId: null
    }
  };
  carData = {};
  constructor(private _formBuilder: FormBuilder,
              private _customerService: CustomerService,
              private _paymentService: PaymentService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.carData = params.get('car');
      this._bookingData.car.cardId = this.carData['carId'];
      this._bookingData.totalPrice = this.carData['differenceInDays'] * this.carData['pricePerDay'];
    });
    this.customerFormGroup = this._formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.addressFormGroup = this._formBuilder.group({
      streetLine: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      country: new FormControl({value: '0', disabled: true}, Validators.required),
      state: new FormControl('', Validators.required)
    });

    this.paymentFormGroup = this._formBuilder.group({
      paymentDate: new FormControl(new Date(), Validators.required),
      cardNumber: new FormControl('', Validators.required),
      cardCVV: new FormControl('', Validators.required),
      totalPrice: new FormControl({value: '', disabled: true}, Validators.required),
      paymentStatus: new FormControl({value: '', disabled: true}, Validators.required),
    });
  }

  next(stepper: MatStepper){
    stepper.next();
  }

  previous(stepper: MatStepper){
    stepper.previous();
  }

  nextTo2(stepper: MatStepper){
    this._customerService.postCustomer(this.customerFormGroup.value)
      .subscribe(
        (customer: any) => {
          this._bookingData.customer.customerId = customer.customerId;
          this.next(stepper);
        }
      );
  }

  nextTo3(stepper: MatStepper){
    this._paymentService.postAddress(this.addressFormGroup.value)
      .subscribe(
        (address: any) => {
          this._bookingData.payment.billingAddress.addressId = address.addressId;
          this.next(stepper);
        }
      );
  }

  backTo1(stepper: MatStepper){
    this.previous(stepper);
  }

  backTo2(stepper: MatStepper){
    this.previous(stepper);
  }

  done(){
    this.paymentFormGroup.value.billingAddress.addressId = this._bookingData.payment.billingAddress.addressId;
    this._paymentService.postPayment(this.paymentFormGroup.value)
      .subscribe(
        (payment: any) => {
          this._bookingData.payment.paymentId = payment.paymentId
          this._paymentService.bookCar(this._bookingData)
            .subscribe(
              (bookingSuccessData: any) => {
                //redirect him to booking success page
                this._router.navigate(['/booking-success', bookingSuccessData.bookingId]);
              }
            );
        }
      );
  }


}
