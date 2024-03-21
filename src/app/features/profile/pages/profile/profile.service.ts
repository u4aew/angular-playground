import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getUserInfo(): Observable<any> {
    const userInfo = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    };

    return of(userInfo).pipe(
      delay(5000) // Задержка в миллисекундах
    );
  }
}
