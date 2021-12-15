import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTemplate } from '../../template/footer/footer.template';

describe('FootertemplateComponent', () => {
  let component: FooterTemplate;
  let fixture: ComponentFixture<FooterTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTemplate ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
