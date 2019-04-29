import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Result 
  Number = 0;
  Calcul = "";
  state = false
  numberOne() {
    this.Calcul = this.Calcul + "1"
   this.Result = this.Number + 1
  }

  
  NumberTwo() {
    this.Calcul = this.Calcul + "2"
    this.Result = this.Number + 2
   }
 
  
   
  NumberThree() {
    this.Calcul = this.Calcul + "3"
    this.Result = this.Number + 3
   }
 
  
   
  NumberFour() {
    this.Calcul = this.Calcul + "4"
    this.Result = this.Number + 4
   }
 
  
   NumberFive() {
    this.Calcul = this.Calcul + "5"
    this.Result = this.Number + 5
   }
 
  
   
  NumberSix() {
    this.Calcul = this.Calcul + "6"
    this.Result = this.Number + 6
   }
 
  
   
  NumberSeven() {
    this.Calcul = this.Calcul + "7"
    this.Result = this.Number + 7
   }

   NumberEight() {
    this.Calcul = this.Calcul + "8"
    this.Result = this.Number + 8
   }

   NumberNine() {
    this.Calcul = this.Calcul + "9"
    this.Result = this.Number + 9
   }
 
   ButtonAdd() {
    this.Calcul = this.Calcul + "+"
     this.Number = this.Result  
   }

   Off() {
   
    this.state =  true
    this.Calcul = ""
    this.Result = 0
    this.Number = 0
  }
  On() {
   
    this.state =  false
  }
}
