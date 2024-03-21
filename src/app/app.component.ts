import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountService } from "./count.service";
import { LayoutComponent } from "./core/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
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
