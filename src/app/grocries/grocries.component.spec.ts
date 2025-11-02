import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrocriesComponent } from './grocries.component';

describe('GrocriesComponent', () => {
  let component: GrocriesComponent;
  let fixture: ComponentFixture<GrocriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrocriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrocriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
