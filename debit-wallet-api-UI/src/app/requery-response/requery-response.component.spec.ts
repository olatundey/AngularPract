import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeryResponseComponent } from './requery-response.component';

describe('RequeryResponseComponent', () => {
  let component: RequeryResponseComponent;
  let fixture: ComponentFixture<RequeryResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequeryResponseComponent]
    });
    fixture = TestBed.createComponent(RequeryResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
