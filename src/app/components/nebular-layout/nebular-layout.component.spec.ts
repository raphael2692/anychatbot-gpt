import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularLayoutComponent } from './nebular-layout.component';

describe('NebularLayoutComponent', () => {
  let component: NebularLayoutComponent;
  let fixture: ComponentFixture<NebularLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebularLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NebularLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
