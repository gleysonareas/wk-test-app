import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTemplate } from '../../template/nav/nav.template';

describe('NavtemplateComponent', () => {
  let component: NavTemplate;
  let fixture: ComponentFixture<NavTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTemplate] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
