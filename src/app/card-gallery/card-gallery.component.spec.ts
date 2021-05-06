import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { CardService } from '../card.service';
import { CardsResponse } from '../classes/cards-response';
import { CardGalleryComponent } from './card-gallery.component';

describe('CardGalleryComponent', () => {

  let component: CardGalleryComponent;
  let fixture: ComponentFixture<CardGalleryComponent>;
  let cardService: CardService;
  let mockCardsResponse: CardsResponse = {
    cards: [
      {
      name: 'Miraak, Dragonborn',
      rarity: 'Legendary',
      type: 'Creature',
      subtypes: [
      'Nord'
      ],
      cost: 11,
      power: 5,
      health: 5,
      set: {
      id: 'cs',
      name: 'Core Set',
      _self: 'https://api.elderscrollslegends.io/v1/sets/cs'
      },
      collectible: true,
      soulSummon: 1200,
      soulTrap: 400,
      text: 'Summon: Steal an enemy creature.',
      attributes: [
      'Willpower'
      ],
      unique: true,
      imageUrl: 'https://images.elderscrollslegends.io/cs/miraak_dragonborn.png',
      id: '92b0bc42020cac52026185fef5b828d5b7f30562'
      }
    ],
    _pageSize: 20,
    _totalCount: 1
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGalleryComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CardService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call subscribeToSearchTerm function', () => {
      spyOn(component, 'subscribeToSearchTerm');
      component.ngOnInit();
      expect(component.subscribeToSearchTerm).toHaveBeenCalled();
    })
  });

  describe('subscribeToSearchTerm', () => {

    beforeEach(() => {
      cardService = TestBed.inject(CardService);
    });

    it('should set searchTerm with new value of searchTerm from cardService', fakeAsync(() => {
      cardService.searchTerm = new BehaviorSubject('test value');
      component.subscribeToSearchTerm();
      tick();
      expect(component.searchTerm).toEqual('test value');
    }));

    it('should call scrollToViewById, resetCards, loadSearchedCards functions', fakeAsync(() => {
      cardService.searchTerm = new BehaviorSubject('test value');
      spyOn(component, 'scrollToViewById');
      spyOn(component, 'resetCards');
      spyOn(component, 'loadSearchedCards');
      component.subscribeToSearchTerm();
      tick();
      expect(component.scrollToViewById).toHaveBeenCalled();
      expect(component.resetCards).toHaveBeenCalled();
      expect(component.loadSearchedCards).toHaveBeenCalled();
    }));

  });

  describe('scrollToViewById', () => {
    it('should call scrollIntoView on selected element', fakeAsync(() => {
      component.myId = 'card-gallery';
      component.cards = mockCardsResponse.cards;
      fixture.detectChanges();
      const element = fixture.nativeElement.querySelector('#card-gallery-header');
      spyOn(element, 'scrollIntoView');

      component.scrollToViewById('card-gallery-header');
      tick();
      expect(element.scrollIntoView).toHaveBeenCalled();
    }));
  });

  describe('loadSearchedCards', () => {

    beforeEach(() => {
      cardService = TestBed.inject(CardService);
    });

    it('should add new cards to cards array and set totalNumberOfCards when API call is successful', fakeAsync(() => {
      spyOn(cardService, 'searchCards').and.returnValue(of(mockCardsResponse));
      component.loadSearchedCards('test');
      tick();
      expect(component.cards).toEqual(mockCardsResponse.cards);
      expect(component.totalNumberOfCards).toBe(1);
    }));

    it('should set showErrorMsg to true when API throws error', fakeAsync(() => {
      const mockHttpError = new HttpErrorResponse(
        {
          status: 500,
          statusText: 'We had a problem with our server. Please try again later'
        }
      );
      spyOn(cardService, 'searchCards').and.returnValue(throwError(mockHttpError));

      component.loadSearchedCards('test');
      tick();
      expect(component.showErrorMsg).toBeTruthy();
    }));
  });

  describe('resetCards', () => {
    it('should reset variables', () => {
      component.page = 10;
      component.totalNumberOfCards = 100;
      component.cards = mockCardsResponse.cards;
      component.showErrorMsg = true;
      component.resetCards();
      expect(component.page).toBe(1);
      expect(component.totalNumberOfCards).toBe(0);
      expect(component.cards).toEqual([]);
      expect(component.showErrorMsg).toBeFalsy();
    });
  });

  describe('onScroll', () => {
    it('should not load cards when totalNumberOfCards equals cards length', () => {
      component.cards = mockCardsResponse.cards;
      component.totalNumberOfCards = 1;
      component.page = 1;
      spyOn(component, 'loadSearchedCards');
      component.onScroll();
      expect(component.page).toBe(1);
      expect(component.loadSearchedCards).not.toHaveBeenCalled();
    });

    it('should call loadSearchedCards and increase page number when totalNumberOfCards not equals cards length', () => {
      component.cards = mockCardsResponse.cards;
      component.totalNumberOfCards = 10;
      component.page = 1;
      spyOn(component, 'loadSearchedCards');
      component.onScroll();
      expect(component.page).toBe(2);
      expect(component.loadSearchedCards).toHaveBeenCalled();
    });
  });

});
