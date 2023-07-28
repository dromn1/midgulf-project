import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShariyahComponent } from './shariyah.component';

describe('ShariyahComponent', () => {
  let component: ShariyahComponent;
  let fixture: ComponentFixture<ShariyahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShariyahComponent]
    });
    fixture = TestBed.createComponent(ShariyahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
