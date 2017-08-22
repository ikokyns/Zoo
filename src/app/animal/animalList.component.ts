import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal.component.html',
  styleUrls: ['../app.component.css']
})

export class AnimalComponent {
	private animals: any[] = [
	  { species: 'Horse', name: 'Silver', birthDate: '12101980' },
	  { species: 'Sheep', name: 'Magy', birthDate: '10071995' },
	  { species: 'Hipo', name: 'Lipo', birthDate: '02052000' },
	  { species: 'Ape', name: 'Dora', birthDate: '06052011' },
	  { species: 'Snake', name: 'Hans', birthDate: '11121983' },
	];
}