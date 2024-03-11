import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count = 0; // URL вашего API для логина

  constructor() {}

  add() {
    this.count = this.count + 1
  }
}
