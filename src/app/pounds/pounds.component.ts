import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
	selector: 'app-pounds',
	templateUrl: './pounds.component.html'
})
export class PoundsComponent{
    
    public barWeight: string = '0';
    public totalWeight: string = '0';
    public weight: number = 0;

   	plates: Object[] = [
    { weights: '1.25', id: '9'},
    { weights: '2.5', id: '8'},
    { weights: '5', id: '7'},
    { weights: '10', id: '6'},
    { weights: '25', id: '5'},
    { weights: '35', id: '4'},
    { weights: '45', id: '3'},
    { weights: '100', id: '3'},
 ];

constructor(public calc_service: CalculateService) { }


   //  public calc() {
     //   this.weight = parseInt(this.totalWeight) - parseInt(this.barWeight);
       // console.log(this.weight);
      
 


}