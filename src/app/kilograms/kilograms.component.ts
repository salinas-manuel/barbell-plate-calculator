import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';

@Component({
	selector: 'app-kilograms',
	templateUrl: './kilograms.component.html'
})
export class KilogramsComponent{

    public barWeight: string = '20';
    public totalWeight: string = '';
    public weight: number = 0;
    public idsUsed = [];

    plates= [
        { weights: 25, id: 9, value: false},
        { weights: 20, id: 8, value: true},
        { weights: 15, id: 7, value: true},
        { weights: 10, id: 6, value: true},
        { weights: 5, id: 5, value: true},
        { weights: 2.5, id: 4, value: true},
        { weights: 1.25, id: 3, value: false},
     ];

    get selectedPlates() {
        return this.plates
            .filter(plate => plate.value)
    }

    public calc(){
        this.weight = ((parseFloat(this.totalWeight) - parseFloat(this.barWeight)) / 2);
        let totalUsed = []; 
        this.idsUsed = [];


        //Beginning of calculation of weights on each side
        for (let i = 0; i < this.selectedPlates.length; i += 1){
            let count = 0
            while (this.weight >= this.selectedPlates[i].weights){
                this.weight -= this.selectedPlates[i].weights
                count += 1
                    if (count >= 1){
                        // pushes the selectedPlates weights onto totalUsed array
                        totalUsed.push(this.selectedPlates[i].weights); 
                        // pushes the selectedPlates IDs onto totalUsed array
                        totalUsed.push(this.selectedPlates[i].id);
                    }    
            }
        }
        //loop that gets every other element of totalUsed array starting with the first element
        // AKA just displays the ID's of the weights
        for (let i = 0; i < totalUsed.length; i += 2) {
            this.idsUsed.push(totalUsed[i + 1]);
        }
        //loop that gets every other element of totalUsed array starting with the second element
        //AKA just displays the weights without their IDs        

    return {totalUsed, any: this.idsUsed, remaining: this.weight} 
    } 

}