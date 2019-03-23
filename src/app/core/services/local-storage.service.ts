import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class LocalStorageService {
  appNamePrefix: string;

  constructor() {
    this.appNamePrefix = `${environment.appName}-`;
  }

  loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(this.appNamePrefix)) {
        state = state || {};
        const stateKey = storageKey
          .replace(this.appNamePrefix, '')
          .toLowerCase()
          .split('.');
        let currentStateRef = state;
        stateKey.forEach((key, index) => {
          if (index === stateKey.length - 1) {
            currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, undefined);
  }

  setItem(key: string, value: any) {
    localStorage.setItem(`${this.appNamePrefix}${key}`, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${this.appNamePrefix}${key}`));
  }
}
