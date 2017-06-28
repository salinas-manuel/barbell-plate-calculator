import { Injectable } from '@angular/core';
import { PoundsComponent } from './pounds/pounds.component';
import { KilogramsComponent } from './kilograms/kilograms.component';

@Injectable()
export class CalculateService {

/*
	public barWeight: string = '45';
    public totalWeight: string = '';
    public weight: number = 0;
    // had to declare the following variables at the beginning of class because they don't show in the view 
    // when they're inside the calc() function  ¯\_(ツ)_/¯, must have good reasons for it, but I don't know why
   /*public totalUsed = []; 
    public idsUsed = [] ;
    public exp = 1;
    public platesUsed = [];
    //public count = 0; 
    /*public totalUsed = []; 
    public idsUsed = [];
    public exp = 1;
    public platesUsed = []; 


   
	public plates= [
    { weights: 100, id: 3, value: false},
    { weights: 45, id: 3, value: true},
    { weights: 35, id: 4, value: true},
    { weights: 25, id: 5, value: true},
    { weights: 10, id: 6, value: true},
    { weights: 5, id: 7, value: true},
    { weights: 2.5, id: 8, value: true},
    { weights: 1.25, id: 9, value: false},
 ];

 	//getter that filters out the checked weights
 	get selectedPlates() {
		return this.plates
			.filter(plate => plate.value)
	}


	public calc() {
		this.weight = ((parseFloat(this.totalWeight) - parseFloat(this.barWeight)) / 2);
		//this.weight.toFixed(2);
		
		//totalUsed is both the weights and their corresponding IDs in an array 
		
		//experimenting to just display the count
		 
		//idsUsed is an array for just the ids of the weights
		
		//platesUsed is an array for just the weights without their ids
		var totalUsed = []; 
    	var idsUsed = [] ;
    	var exp = 1;
    	var platesUsed = [];
    	// Need to know how to display data from calc() on the view
		//Beginning of calculation of weights on each side
		for (let i = 0; i < this.selectedPlates.length; i += 1) {
			var count = 0
			while (this.weight >= this.selectedPlates[i].weights) {
				this.weight -= this.selectedPlates[i].weights
				count += 1
			}
			
			if (count >= 1) {
				exp = count // Count = the number of plates needed on each side, @ 225, the count becomes 2
				// Need to find out how to make the count be applicable and double/ triple weights when needed
				// make count multiply with different IDs???? not the value of ID but how many there are. 
				// Need to find out if an array of [45, 10, etc plates] can be multiplied by the count. [45, 10] x 2(or 3) to show how many plates are needed on each side

				totalUsed.push(this.selectedPlates[i].weights) // pushes the selectedPlates weights onto totalUsed array
				// Count seems to go back to 1 when number reaches 500??????????? possible bug
				totalUsed.push(this.selectedPlates[i].id) // pushes the selectedPlates IDs onto the totalUsed array
			}
		}
		//loop that gets every other element of totalUsed array starting with the first element
		// aka just displays the ID's of the weights
		for (let i = 0; i < totalUsed.length; i += 2) {
			idsUsed.push(totalUsed[i + 1]);
		}
		//loop that gets every other element of totalUsed array starting with the second element
		//AKA just displays the weights without their IDs
		for (let i = 0; i < totalUsed.length; i += 2) {
			platesUsed.push(totalUsed[i]);
		}
	console.log(exp);
	console.log(idsUsed);
	console.log(platesUsed);
	console.log(totalUsed);	
	//console.log(this.selectedPlates);
	
	//console.log(this.selectedPlates[0].id);

	return {remaining: this.weight} 


	}	*/
	
}