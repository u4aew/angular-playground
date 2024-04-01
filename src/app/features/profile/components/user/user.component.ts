import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
})
export class UserComponent {
  @Input() id!: string | number;
  @Input() email!: string;
  @Input() name!: string;

  getEmailName () {
    return this.email + ' ' + this.name
  }
}
