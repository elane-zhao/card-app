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
    this.setSearchTermWithUserInput();
  }

  setSearchTermWithUserInput() {
    this.subscription = fromEvent(this.searchInput?.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(1000),
      distinctUntilChanged(),
      map((event: any) => event.target.value),
    ).subscribe((searchText: string) => {
      this.cardService.searchTerm.next(searchText);
    });
  }

}
