import { Component, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonSearchbar,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { WisdomService } from 'src/services/wisdom.service';
import * as dayjs from 'dayjs';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';
import { addIcons } from 'ionicons';
import { chevronForwardOutline } from 'ionicons/icons';

dayjs.extend(advancedFormat);

type TodayWisdom = {
  title: string;
  date: string;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButton,
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

  todaysWisdom: TodayWisdom | null = null;

  constructor() {
    effect(() => {
      this.setCurrentWisdom();
    });
    addIcons({ chevronForwardOutline });
  }

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

  setCurrentWisdom() {
    const wisdoms = this.wisdomsService.wisdomsSignal();
    if (wisdoms) {
      const dayNumber = new Date().getDate();
      const wisdomIndex = dayNumber % wisdoms.length;
      this.todaysWisdom = {
        date: dayjs('2024-03-28').format('Do MMMM YYYY'),
        title: wisdoms[wisdomIndex].title,
      };
    }
  }
}
