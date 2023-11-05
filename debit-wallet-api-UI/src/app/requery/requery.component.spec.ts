import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeryComponent } from './requery.component';

describe('RequeryComponent', () => {
  let component: RequeryComponent;
  let fixture: ComponentFixture<RequeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequeryComponent]
    });
    fixture = TestBed.createComponent(RequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
