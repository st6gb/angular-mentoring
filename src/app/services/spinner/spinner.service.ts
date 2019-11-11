import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isShown$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor() { }

  public show() {
    this.setAction(true);
  }

  public hide() {
    this.setAction(false);
  }

  private setAction(value: boolean): void {
    this.isShown$.next(value);
  }
}
