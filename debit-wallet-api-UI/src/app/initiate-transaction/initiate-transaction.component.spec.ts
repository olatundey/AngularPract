import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateTransactionComponent } from './initiate-transaction.component';

describe('InitiateTransactionComponent', () => {
  let component: InitiateTransactionComponent;
  let fixture: ComponentFixture<InitiateTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitiateTransactionComponent]
    });
    fixture = TestBed.createComponent(InitiateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
