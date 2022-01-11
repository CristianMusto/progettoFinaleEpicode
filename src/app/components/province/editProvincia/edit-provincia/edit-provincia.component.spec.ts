import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProvinciaComponent } from './edit-provincia.component';

describe('EditProvinciaComponent', () => {
  let component: EditProvinciaComponent;
  let fixture: ComponentFixture<EditProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProvinciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
