import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pop1Page } from './pop1.page';

describe('Pop1Page', () => {
  let component: Pop1Page;
  let fixture: ComponentFixture<Pop1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pop1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pop1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
