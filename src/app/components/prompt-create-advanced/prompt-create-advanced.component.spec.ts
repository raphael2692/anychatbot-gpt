import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptCreateAdvancedComponent } from './prompt-create-advanced.component';

describe('PromptCreateAdvancedComponent', () => {
  let component: PromptCreateAdvancedComponent;
  let fixture: ComponentFixture<PromptCreateAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptCreateAdvancedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptCreateAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
