import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsComponent } from './card-details.component';

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent;
  let fixture: ComponentFixture<CardDetailsComponent>;

  const mockCard = {
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
    };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsComponent);
    component = fixture.componentInstance;
    component.card = mockCard; // set input before first detectChanges
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
