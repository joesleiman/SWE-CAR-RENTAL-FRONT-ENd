import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public headerTitle: string = 'MIU Car Rental';
  public loginTitle: string = 'Log in';
  public loginIcon: string = 'account_circle';
  todayDate: Date = new Date();
  carData = {
    imageUrl: '../../../assets/images/mercedes.jpeg',
    description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small,' +
      ' agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    rentPricePerDay: 75
  };

  constructor(public dialog: MatDialog){
  }

  onOpen(event){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'inherit',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  search(event){

  }
}
