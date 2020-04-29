import { Component } from '@angular/core';

// add this ` after templateUrl:, to start inner <html>
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
}
