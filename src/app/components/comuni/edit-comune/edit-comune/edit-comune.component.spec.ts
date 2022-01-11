import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComuneComponent } from './edit-comune.component';

describe('EditComuneComponent', () => {
  let component: EditComuneComponent;
  let fixture: ComponentFixture<EditComuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
