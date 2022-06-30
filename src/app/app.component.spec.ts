import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { AppService } from './app.service';

class MockedAppService extends AppService {
  public override getUser(){
    return {username: 'u1', name: 'abc'};
  }
}

describe('AppComponent', () => {
  let app:AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AppService, useClass: MockedAppService }
      ]
    }).compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-test'`, () => {
    expect(app.title).toEqual('angular-unit-test');
  });

  it('should have user object set', () => {
    expect(app.user).toEqual({username: 'u1', name: 'abc'});
  });

  it('should render title', () => {    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-unit-test');
  });

  it('should change title on button click', () => {    
    // compiled.
    //app.changeTitle();
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', {});
    fixture.detectChanges();
    const spanEl = fixture.debugElement.query(By.css('.content span')).nativeElement as HTMLSpanElement;
    expect(spanEl.textContent).toContain('title-changed');
  });
});
