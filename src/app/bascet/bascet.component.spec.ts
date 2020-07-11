import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BascetComponent } from './bascet.component';

describe('BascetComponent', () => {
  let component: BascetComponent;
  let fixture: ComponentFixture<BascetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BascetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BascetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
