import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorPage } from './monitor.page';

describe('MonitorPage', () => {
  let component: MonitorPage;
  let fixture: ComponentFixture<MonitorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
