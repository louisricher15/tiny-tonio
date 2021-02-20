import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitProductsComponent } from './submit-products.component';

describe('SubmitProductsComponent', () => {
  let component: SubmitProductsComponent;
  let fixture: ComponentFixture<SubmitProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
