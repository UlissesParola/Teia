import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoModalComponent } from './foto-modal.component';

describe('FotoModalComponent', () => {
  let component: FotoModalComponent;
  let fixture: ComponentFixture<FotoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoModalComponent]
    });
    fixture = TestBed.createComponent(FotoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
