import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandanciaComponent } from './comandancia.component';

describe('ComandanciaComponent', () => {
  let component: ComandanciaComponent;
  let fixture: ComponentFixture<ComandanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
