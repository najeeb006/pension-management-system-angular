import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionStatusComponent } from './pension-status.component';

describe('PensionStatusComponent', () => {
  let component: PensionStatusComponent;
  let fixture: ComponentFixture<PensionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
