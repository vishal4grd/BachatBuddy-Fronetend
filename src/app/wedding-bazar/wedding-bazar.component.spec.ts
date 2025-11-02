import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingBazarComponent } from './wedding-bazar.component';

describe('WeddingBazarComponent', () => {
  let component: WeddingBazarComponent;
  let fixture: ComponentFixture<WeddingBazarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeddingBazarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingBazarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
