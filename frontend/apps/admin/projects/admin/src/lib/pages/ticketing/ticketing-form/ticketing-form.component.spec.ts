import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketingFormComponent } from './ticketing-form.component';

describe('TicketingFormComponent', () => {
  let component: TicketingFormComponent;
  let fixture: ComponentFixture<TicketingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
