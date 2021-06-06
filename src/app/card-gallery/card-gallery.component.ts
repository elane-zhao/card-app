import { Component, OnInit } from "@angular/core";
import { CardService } from "../card.service";
import { Card } from "../classes/card";
import { CardsResponse } from "../classes/cards-response";
import { LoaderService } from "../loader.service";

@Component({
  selector: "app-card-gallery",
  templateUrl: "./card-gallery.component.html",
  styleUrls: ["./card-gallery.component.scss"],
})
export class CardGalleryComponent implements OnInit {
  // the cards retrieved from card service to display on the gallery page
  cards: Card[] = [];
  // the current page number
  page: number = 1;
  // the word user entered in search box
  searchTerm: string = "";
  // the total number of cards in the card service API response
  totalNumberOfCards: number = 0;
  // flag used to manage error message display when there is an API error
  showErrorMsg: boolean = false;
  // page Id for card gallery component
  myId = "card-gallery";

  isLoading = false;

  constructor(
    private cardService: CardService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.subscribeToSearchTerm();
    this.loaderService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
  }

  subscribeToSearchTerm() {
    this.cardService.searchTerm.subscribe((newValue: string) => {
      this.scrollToViewById(`${this.myId}-header`);
      this.searchTerm = newValue;
      this.resetCards();
      this.loadSearchedCards(this.searchTerm);
    });
  }

  scrollToViewById(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView();
  }

  loadSearchedCards(searchTerm: string) {
    this.cardService.searchCards(searchTerm, this.page).subscribe(
      (data: CardsResponse) => {
        this.cards = this.cards.concat(data.cards);
        this.totalNumberOfCards = data._totalCount;
      },
      (error) => {
        this.showErrorMsg = true;
        console.error(
          `Error occurred when retrieving data from card service.`,
          error
        );
      }
    );
  }

  resetCards() {
    this.page = 1;
    this.totalNumberOfCards = 0;
    this.cards = [];
    this.showErrorMsg = false;
  }

  onScroll() {
    if (this.cards.length === this.totalNumberOfCards) {
      return;
    }
    this.page++;
    this.loadSearchedCards(this.searchTerm);
  }

  trackByCardId(index: number, card: Card): string {
    return card.id;
  }
}
