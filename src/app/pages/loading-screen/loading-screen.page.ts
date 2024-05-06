import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItemOption,
  IonItem,
  IonLabel,
  IonSpinner,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.page.html',
  styleUrls: ['./loading-screen.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonCol,
    IonRow,
    IonGrid,
    IonSpinner,
    IonLabel,
    IonItem,
    IonItemOption,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class LoadingScreenPage implements OnInit {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/signin']);
  }

  ngOnInit(): void {
    console.log('Loading Screen');
    // setTimeout(() => {
    //   this.navigate();
    // }, 2000);
  }
}
