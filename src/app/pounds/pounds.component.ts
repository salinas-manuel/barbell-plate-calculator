import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
	selector: 'app-pounds',
	templateUrl: './pounds.component.html'
})
export class PoundsComponent{
    
    //public barWeight: string = '0';
    //public totalWeight: string = '0';
    //public weight: number = 0;

   	public plates: Object[] = [
    { weights: '100', id: '3', value: false},
    { weights: '45', id: '3', value: true},
    { weights: '35', id: '4', value: true},
    { weights: '25', id: '5', value: true},
    { weights: '10', id: '6', value: true},
    { weights: '5', id: '7', value: true},
    { weights: '2.5', id: '8', value: true},
    { weights: '1.25', id: '9', value: false},
 ];



constructor(public calc_service: CalculateService) { }


   //  public calc() {
     //   this.weight = parseInt(this.totalWeight) - parseInt(this.barWeight);
       // console.log(this.weight);
      
 


}