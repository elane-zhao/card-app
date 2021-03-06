import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // Behavior Subject to store the current isLoading value
  public isLoading = new BehaviorSubject(false);
  constructor() { }
}
