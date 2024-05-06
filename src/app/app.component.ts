import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, NavBarComponent],
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  userService = inject(UserService);
  router = inject(Router);
  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.userService.getUser(user.uid).subscribe((user) => {
          this.authService.currentUserSig.set({
            uid: user.uid!,
            email: user.email!,
            username: user.displayName!,
            settings: user.settings!,
            progress: user.progress!,
          });
          this.router.navigateByUrl('/home');
        });
      } else {
        this.authService.currentUserSig.set(null);
        this.router.navigateByUrl('/signin');
      }
    });
  }
}
