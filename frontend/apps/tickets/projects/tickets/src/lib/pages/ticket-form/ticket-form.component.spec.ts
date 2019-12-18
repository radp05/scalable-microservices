import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormComponent } from './ticket-form.component';
import { RouterTestingModule } from '@angular/router/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../ticket.service';
import { MatSnackBar } from '@angular/material';

describe('TicketFormComponent', () => {
  let component: TicketFormComponent;
  let fixture: ComponentFixture<TicketFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TicketFormComponent],
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: TicketService, useClass: MockTicketService },
        { provide: MatSnackBar }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockTicketService {

}