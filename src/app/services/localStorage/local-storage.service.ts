import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  [key: string]: any;
  [index: number]: string;

  public setItem(name: string, item: any): void {
    if (typeof item === 'object') {
      localStorage.setItem(name, JSON.stringify(item));
    } else {
      localStorage.setItem(name, item);
    }
  }

  public getItem(name: string): string {
    return localStorage.getItem(name);
  }

  public removeItem(name: string): boolean {
    return Boolean(localStorage.removeItem(name));
  }

  public clear(): void {
    return localStorage.clear();
  }

  public key(index: number): string {
    return localStorage.key(index);
  }
}
