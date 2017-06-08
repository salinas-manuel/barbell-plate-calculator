import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
	selector: 'app-kilograms',
	templateUrl: './kilograms.component.html'
})
export class KilogramsComponent{

   constructor(public calc_service: CalculateService) {}
	
	plates: Object[] = [
    { weight: '1.25', id: '3'},
    { weight: '2.5', id: '4'},
    { weight: '5', id: '5'},
    { weight: '10', id: '6'},
    { weight: '15', id: '7'},
    { weight: '20', id: '8'},
    { weight: '25', id: '9'},
];

}