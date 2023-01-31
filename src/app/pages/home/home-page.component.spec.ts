import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { of } from 'rxjs';
import { SHOW_1, SHOW_2 } from '../../helpers/test.helper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowService } from '../../services/show/show.service';
import { TShowByGenre } from '../../types/show-by-genre.type';
import { LoadingModule } from '../../modules/loading/loading.module';
import { ShowCarouselComponent } from '../../components/show-carousel/show-carousel.component';
import { ShowCardComponent } from '../../components/show-card/show-card.component';
import { IShow } from '../../interfaces/show.interface';
import { RouterTestingModule } from '@angular/router/testing';

const fakeShowList: IShow[] = [SHOW_1, SHOW_2];

const fakeGenreGroups: Partial<TShowByGenre> = { Miscellaneous: fakeShowList };
class FakeShowService {

  getList() {
    return of(fakeShowList);
  }

  getListByGenre() {
    return of(fakeGenreGroups);
  }
}

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent, ShowCarouselComponent, ShowCardComponent],
      imports: [HttpClientTestingModule, LoadingModule, RouterTestingModule],
      providers: [{ provide: ShowService, useClass: FakeShowService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.showsByGenre).toEqual(fakeGenreGroups);
  });
});
