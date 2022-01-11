import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFatturaComponent } from './edit-fattura.component';

describe('EditFatturaComponent', () => {
  let component: EditFatturaComponent;
  let fixture: ComponentFixture<EditFatturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFatturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFatturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
