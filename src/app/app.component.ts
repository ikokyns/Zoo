import { Component } from '@angular/core';
import { AnimalComponent } from './animal/animalList.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Zoo';
}