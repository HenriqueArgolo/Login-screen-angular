import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreenLayoutComponent } from './login-screen-layout.component';

describe('LoginScreenLayoutComponent', () => {
  let component: LoginScreenLayoutComponent;
  let fixture: ComponentFixture<LoginScreenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginScreenLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginScreenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
