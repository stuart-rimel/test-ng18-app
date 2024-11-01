import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusTextInputComponent } from './modus-text-input.component';

describe('ModusTextInputComponent', () => {
  let component: ModusTextInputComponent;
  let fixture: ComponentFixture<ModusTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModusTextInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModusTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
