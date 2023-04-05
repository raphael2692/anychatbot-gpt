import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptCreateRoleplayComponent } from './prompt-create-roleplay.component';

describe('PromptCreateRoleplayComponent', () => {
  let component: PromptCreateRoleplayComponent;
  let fixture: ComponentFixture<PromptCreateRoleplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromptCreateRoleplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptCreateRoleplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
