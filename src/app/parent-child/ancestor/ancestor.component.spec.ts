import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncestorComponent } from './ancestor.component';

describe('AncestorComponent', () => {
  let component: AncestorComponent;
  let fixture: ComponentFixture<AncestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
