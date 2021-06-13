import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private isDark$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getTheme(): Observable<boolean> {
      return this.isDark$.asObservable();
  }

  setTheme(isDark: boolean) {
    localStorage.setItem('theme', isDark.toString());
    this.isDark$.next(isDark);
  }

  constructor() {
    let value = localStorage.getItem('theme');
    if (value) {
      this.isDark$.next(JSON.parse(value) === true);
    } else {
      this.isDark$.next(true);
    }
  }
}
