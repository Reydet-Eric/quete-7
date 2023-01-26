import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeloperComponent } from './deloper.component';

describe('DeloperComponent', () => {
  let component: DeloperComponent;
  let fixture: ComponentFixture<DeloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
