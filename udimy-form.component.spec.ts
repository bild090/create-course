import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdimyFormComponent } from './udimy-form.component';

describe('UdimyFormComponent', () => {
  let component: UdimyFormComponent;
  let fixture: ComponentFixture<UdimyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdimyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdimyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
