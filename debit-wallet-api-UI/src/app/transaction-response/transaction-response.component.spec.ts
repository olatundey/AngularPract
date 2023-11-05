import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionResponseComponent } from './transaction-response.component';

describe('TransactionResponseComponent', () => {
  let component: TransactionResponseComponent;
  let fixture: ComponentFixture<TransactionResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionResponseComponent]
    });
    fixture = TestBed.createComponent(TransactionResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
