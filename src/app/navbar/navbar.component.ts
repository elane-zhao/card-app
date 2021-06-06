import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { CardService } from '../card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {

  // subscription to the search box input keyup event
  subscription: Subscription | undefined;
  // page Id for navbar component
  myId: string = 'navbar';

  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit() {
    // need to be called inside the ngAfterViewInit function, to ensure the searchInput element has already been initialized
    // otherwise if put inside ngOnInit, it will throw Invalid event target error
    this.setSearchTermWithUserInput();
  }

  clearInput() {
    this.cardService.searchTerm.next('');
  }

  setSearchTermWithUserInput() {
    this.subscription = fromEvent(this.searchInput?.nativeElement, 'keyup').pipe( // pipe the event with multiple operators
      debounceTime(1000), // debounce time is a delay we can add between event subscription, wait until the user stops typing for a second
      map((event: any) => event.target.value),
      // filter(res => res.length > 0), // event won't be triggered if user input is empty string ''
      distinctUntilChanged() // if the user input is the same with previous, event won't be triggered
    ).subscribe((searchText: string) => {
      this.cardService.searchTerm.next(searchText);
    });
  }

  search(input: string) {
    this.cardService.searchTerm.next(input);
  }
}
