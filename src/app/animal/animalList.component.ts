import { Component } from '@angular/core';
import { Animal } from './animal'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal.component.html',
  styleUrls: ['../app.component.css']
})

export class AnimalComponent {
	animals = [
	new Animal('Horse', 'Silver', '12052015'),
	new Animal('Sheep', 'Magy', '10071995'),
	new Animal('Ape', 'Dora', '06052011'),
	new Animal('Snake', 'Hans', '11121983'),
	];

	removeAnimal (animal){

		var i = this.animals.indexOf(animal);

		this.animals.splice(i, 1);
	}

	moveToTop (animal){

		
	}
}