import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardService } from './card.service';
import { HttpClient } from '@angular/common/http';
import { CardsResponse } from './classes/cards-response';
import { of } from 'rxjs';

describe('CardService', () => {
  let service: CardService;
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('searchCards function', () => {
    it('should call the http get method and return an obserable', () => {
      const http = TestBed.inject(HttpClient);
      spyOn(http, 'get').and.returnValue(of(mockCardsResponse));
      service.searchCards('aa', 1, 20).subscribe(res => {
        expect(res).toEqual(mockCardsResponse);
        expect(http.get).toHaveBeenCalledWith(`https://api.elderscrollslegends.io/v1/cards?name=aa&page=1&pageSize=20`);
      });
    });
  });
});
