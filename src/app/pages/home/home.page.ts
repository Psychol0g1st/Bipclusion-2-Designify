import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { WisdomService } from 'src/services/wisdom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    NavBarComponent,
  ],
})
export class HomePage implements OnInit {
  wisdomsService = inject(WisdomService);
  authService = inject(AuthService);

  constructor() {}

  ngOnInit() {
    console.info('Home Page');

    console.info('Load wisdoms');
    this.wisdomsService.getWisdoms().subscribe((wisdoms) => {
      const temp =
        Array.isArray(wisdoms) && wisdoms.length > 0 ? wisdoms : null;
      this.wisdomsService.wisdomsSignal.set(temp);
      console.info('Wisdoms loaded: ', temp);
    });
  }

  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    console.log('searchItems', query);
  }
}
