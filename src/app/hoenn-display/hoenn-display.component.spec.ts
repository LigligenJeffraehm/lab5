import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoennDisplayComponent } from './hoenn-display.component';

describe('HoennDisplayComponent', () => {
  let component: HoennDisplayComponent;
  let fixture: ComponentFixture<HoennDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoennDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
