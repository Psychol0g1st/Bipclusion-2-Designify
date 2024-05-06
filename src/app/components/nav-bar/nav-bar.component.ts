import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bookmarkOutline, homeOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    RouterModule,
  ],
})
export class NavBarComponent {
  constructor() {
    addIcons({ bookmarkOutline, personOutline, homeOutline });
  }
}
