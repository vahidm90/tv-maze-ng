
import { ShowService } from './show.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IShow } from '../../interfaces/show.interface';
import { of } from 'rxjs';
import { SHOW_1, SHOW_2 } from '../../helpers/test.helper';


describe('ShowService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let showService: ShowService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    showService = new ShowService(httpClientSpy);
  });

  it('should return expected shows (HttpClient called once)', (done: DoneFn) => {
    const expectedShows: IShow[] =
      [SHOW_1, SHOW_2];

    httpClientSpy.get.and.returnValue(of(expectedShows));

    showService.getList().subscribe({
      next: shows => {
        expect(shows)
          .withContext('expected shows')
          .toEqual(expectedShows);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

});

/*
it('should return an error when the server returns a 404', (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  httpClientSpy.get.and.returnValue(of(errorResponse));

  showService.getList().subscribe({
    next: _ => {
      done.fail('expected an error, not shows');
    },
    error: (error: unknown) => {
      // @ts-ignore
      expect(error.message).toContain('test 404 error');
      done();
    }
  });
});
*/
