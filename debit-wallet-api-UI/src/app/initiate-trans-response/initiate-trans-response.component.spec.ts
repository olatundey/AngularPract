import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateTransResponseComponent } from './initiate-trans-response.component';

describe('InitiateTransResponseComponent', () => {
  let component: InitiateTransResponseComponent;
  let fixture: ComponentFixture<InitiateTransResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitiateTransResponseComponent]
    });
    fixture = TestBed.createComponent(InitiateTransResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
