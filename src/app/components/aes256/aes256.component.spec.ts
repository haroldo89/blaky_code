import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aes256Component } from './aes256.component';

describe('Aes256Component', () => {
  let component: Aes256Component;
  let fixture: ComponentFixture<Aes256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aes256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aes256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
