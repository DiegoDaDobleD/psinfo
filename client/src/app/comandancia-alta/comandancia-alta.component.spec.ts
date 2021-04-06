import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComandanciaAltaComponent } from './comandancia-alta.component';

describe('ComandanciaAltaComponent', () => {
  let component: ComandanciaAltaComponent;
  let fixture: ComponentFixture<ComandanciaAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComandanciaAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComandanciaAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
