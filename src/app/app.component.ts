import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnusedComponent } from './unused.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, UnusedComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cleanup-unused-imports';
}
