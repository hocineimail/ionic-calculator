import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Result 
  Number = 0;
  Operation = ""
  Calcul = "";
  state = false
  numberOne() {
    this.Calcul = this.Calcul + "1"
   this.Result = this.Number + 1
  }

  
  NumberTwo() {
    this.Operation =   this.Operation +"2"
    this.Calcul = this.Calcul + "2"
    this.Result = this.Number + 2
   }
 
  
   
  NumberThree() {
    this.Operation =   this.Operation + "3"
    this.Calcul = this.Calcul + "3"
    this.Result = this.Number + 3
   }
 
  
   
  NumberFour() {
    this.Operation =   this.Operation +"4"
    this.Calcul = this.Calcul + "4"
    this.Result = this.Number + 4
   }
 
  
   NumberFive() {
    this.Operation =   this.Operation +"5"
    this.Calcul = this.Calcul + "5"
    this.Result = this.Number + 5
   }
 
  
   
  NumberSix() {
    this.Operation =   this.Operation +"6"
    this.Calcul = this.Calcul + "6"
    this.Result = this.Number + 6
   }
 
  
   
  NumberSeven() {
    this.Operation =   this.Operation +"7"
    this.Calcul = this.Calcul + "7"
    this.Result = this.Number + 7
   }

   NumberEight() {
    this.Operation =   this.Operation +"8"
    this.Calcul = this.Calcul + "8"
    this.Result = this.Number + 8
   }

   NumberNine() {
    this.Operation =   this.Operation +"9"
    this.Calcul = this.Calcul + "9"
    this.Result = this.Number + 9
   }
 
   ButtonAdd() {
    this.Calcul = this.Calcul + "+"
    this.Result = parseInt(this.Operation)
    this.Operation = ""
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
