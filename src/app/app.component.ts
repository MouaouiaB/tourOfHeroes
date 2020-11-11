import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // deze title wordt opgeroepen in app.component.html door middel van {{...}}
  title = 'Tour of Heroes';
}
