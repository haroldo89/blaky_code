import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEncriptComponent } from './sql-encript.component';

describe('SqlEncriptComponent', () => {
  let component: SqlEncriptComponent;
  let fixture: ComponentFixture<SqlEncriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlEncriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlEncriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
