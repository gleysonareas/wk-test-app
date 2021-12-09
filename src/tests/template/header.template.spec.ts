import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTemplate } from '../../template/header/header.template';

describe('HeaderTemplate', () => {
  let component: HeaderTemplate;
  let fixture: ComponentFixture<HeaderTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTemplate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
