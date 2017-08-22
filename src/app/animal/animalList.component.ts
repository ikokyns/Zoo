import { Component } from '@angular/core';
import { Animal } from './animal';
import { Sector } from './sector';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal.component.html',
  styleUrls: ['../app.component.css']
})

export class AnimalComponent {
	
	newAnimal = new Animal('', '', '', '');

	animals = [
		new Animal('Horse', 'Silver', '12052015', ''),
		new Animal('Sheep', 'Magy', '10071995', ''),
		new Animal('Ape', 'Dora', '06052011', ''),
		new Animal('Snake', 'Hans', '11121983', ''),
	];

	removeAnimal (animal){

		var i = this.animals.indexOf(animal);

		this.animals.splice(i, 1);
	}

	moveToTop (animal){

		this.animals.pop();
		this.animals.unshift(animal);

	}

	addAnimal() {
		this.animals.push(this.newAnimal);
		this.newAnimal = new Animal('', '', '', '');
	}

	sectors = [
		new Sector('Blue', 'wather'),
		new Sector('Green', 'grass'),
		new Sector('Yellow', 'sand')
	]

}