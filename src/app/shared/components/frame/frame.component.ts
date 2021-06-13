import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from '../../services/color.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  isDark = true;
  isHandset = false;
  appName = 'Notes App';

  constructor(
    private overlayContainer: OverlayContainer, 
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private colorService: ColorService,
    private cdr: ChangeDetectorRef
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
  }

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.colorService.setProfileObs(this.isDark);
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
