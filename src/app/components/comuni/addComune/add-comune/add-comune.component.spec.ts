import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComuneComponent } from './add-comune.component';

describe('AddComuneComponent', () => {
  let component: AddComuneComponent;
  let fixture: ComponentFixture<AddComuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
