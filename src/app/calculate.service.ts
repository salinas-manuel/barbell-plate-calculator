import { Injectable } from '@angular/core';
import { PoundsComponent } from './pounds/pounds.component';
import { KilogramsComponent } from './kilograms/kilograms.component';

@Injectable()
export class CalculateService {

	//constructor(public lbs_component: PoundsComponent) { }


	public barWeight: string = '45';
    public totalWeight: string = '';
    public weight: number = 0;
    //public time = 0;
    //public toRack = [];

	//public plates = [100, 55, 45, 35, 25, 10, 5, 2.5, 1.25];

	public calc() {
		this.weight = (parseInt(this.totalWeight) - parseInt(this.barWeight)) / 2;
		console.log(this.weight);
		
		
		
	}
}
