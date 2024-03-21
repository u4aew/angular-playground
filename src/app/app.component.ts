import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountService } from "./count.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Исправлено здесь
})
export class AppComponent {
  title = 'todo-angular-appCodepen';

  constructor(public countService: CountService) {}

  add() {
    this.countService.add();
  }
}
