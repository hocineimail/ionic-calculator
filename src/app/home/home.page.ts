import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Result = 0
  Number = 0
  numberOne() {
   this.Result = this.Number + 1
  }

  
  NumberTwo() {
    this.Result = this.Number + 2
   }
 
  
   
  NumberThree() {
    this.Result = this.Number + 3
   }
 
  
   
  NumberFour() {
    this.Result = this.Number + 4
   }
 
  
   NumberFive() {
    this.Result = this.Number + 5
   }
 
  
   
  NumberSix() {
    this.Result = this.Number + 6
   }
 
  
   
  NumberSeven() {
    this.Result = this.Number + 7
   }

   NumberEight() {
    this.Result = this.Number + 8
   }

   NumberNine() {
    this.Result = this.Number + 9
   }
 
   ButtonAdd() {
     console.log("plus")
     this.Number = this.Result  
   }
}
