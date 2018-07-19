import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowDetailComponent } from './borrow-detail.component';

describe('BorrowDetailComponent', () => {
  let component: BorrowDetailComponent;
  let fixture: ComponentFixture<BorrowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
