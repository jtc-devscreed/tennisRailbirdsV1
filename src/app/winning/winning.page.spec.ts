import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WinningPage } from './winning.page';

describe('WinningPage', () => {
  let component: WinningPage;
  let fixture: ComponentFixture<WinningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WinningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
