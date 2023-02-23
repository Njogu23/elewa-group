import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsWeCareSectionComponent } from './about-us-we-care-section.component';

describe('AboutUsWeCareSectionComponent', () => {
  let component: AboutUsWeCareSectionComponent;
  let fixture: ComponentFixture<AboutUsWeCareSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsWeCareSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsWeCareSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
