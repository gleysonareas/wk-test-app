import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderComponent } from './add-order.component';

describe('AddClientComponent', () => {
  let component: AddOrderComponent;
  let fixture: ComponentFixture<AddOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
