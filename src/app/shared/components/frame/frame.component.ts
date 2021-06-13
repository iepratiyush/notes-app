import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from '../../services/color.service';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  isDark = true;
  isHandset = false;
  appName = 'Notes App';
  isLoggedIn = false;
  notLoggedInMessage = 'You are not logged in!'
  uid = '';

  constructor(
    private overlayContainer: OverlayContainer, 
    breakpointObserver: BreakpointObserver,
    private router: Router,
    private colorService: ColorService,
    afAuth: FirebaseAuthService,
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.isHandset = true;
      } else {
        this.isHandset = false;
      }
    });

    afAuth.isLoggedIn().subscribe(value => {
      this.isLoggedIn = !!value;
      if (value) {
        this.uid = value?.uid;
      }
    })
  }

  ngOnInit(): void {
    this.colorService.getTheme().subscribe(isDark => {
      this.isDark = isDark;
    })
  }

  toggleTheme(): void {
    this.colorService.setTheme(!this.isDark);
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }

  signOut() {
    this.router.navigate(['/', 'home']);
  }

  accountDeleted() {
    this.router.navigate(['/', 'home']);
  }

  titleClick(): void {
    this.router.navigate(['/', 'secured']);
  }
  
}
