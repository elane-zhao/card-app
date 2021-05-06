import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardsResponse } from '../app/classes/cards-response';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // Behavior Subject that stores the current word user entered in the search box
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private get cardURL(): string {
    return environment.cardServiceURL;
  }
  constructor(private http: HttpClient) { }

  searchCards(name: string = '', page: number, pageSize: number = 20): Observable<CardsResponse> {
    return this.http.get<CardsResponse>(`${this.cardURL}?name=${name}&page=${page}&pageSize=${pageSize}`);
  }
}
