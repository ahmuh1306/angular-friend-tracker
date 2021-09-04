import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendIndividualComponent } from './friend-individual.component';

describe('FriendIndividualComponent', () => {
  let component: FriendIndividualComponent;
  let fixture: ComponentFixture<FriendIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
