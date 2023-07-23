import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTestAppComponent } from './client-test-app.component';

describe('ClientTestAppComponent', () => {
  let component: ClientTestAppComponent;
  let fixture: ComponentFixture<ClientTestAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientTestAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
