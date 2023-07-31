import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutproductsComponent } from './aboutproducts.component';

describe('AboutproductsComponent', () => {
  let component: AboutproductsComponent;
  let fixture: ComponentFixture<AboutproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutproductsComponent]
    });
    fixture = TestBed.createComponent(AboutproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
