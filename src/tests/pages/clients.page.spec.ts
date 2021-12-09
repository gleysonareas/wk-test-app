/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClientsPage } from './../../pages/clients/clients.page';

describe('ClientComponent', () => {
  let component: ClientsPage;
  let fixture: ComponentFixture<ClientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
