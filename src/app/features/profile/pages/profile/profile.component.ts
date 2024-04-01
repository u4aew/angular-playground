import { Component, OnInit,  } from '@angular/core';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';
import { UserComponent } from "../../components/user/user.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  imports: [
    UserComponent,
    CommonModule
  ],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  isLoading: boolean = true; // Переменная для отслеживания состояния загрузки

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUserInfo().subscribe(
      data => {
        this.userInfo = data;
        this.isLoading = false; // Данные загружены, спиннер не нужен
      },
      error => {
        console.error('An error occurred while fetching user info', error);
        this.isLoading = false; // Произошла ошибка, спиннер не нужен
      }
    );
  }
}
