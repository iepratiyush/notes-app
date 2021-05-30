import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private profileObs$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getProfileObs(): Observable<boolean> {
      return this.profileObs$.asObservable();
  }

  setProfileObs(isDark: boolean) {
      this.profileObs$.next(isDark);
  }

  constructor() { }
}
