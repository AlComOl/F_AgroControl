import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaFilterComponent } from './incidencia-filter.component';

describe('IncidenciaFilterComponent', () => {
  let component: IncidenciaFilterComponent;
  let fixture: ComponentFixture<IncidenciaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
