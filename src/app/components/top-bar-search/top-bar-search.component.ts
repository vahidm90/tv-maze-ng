import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UTIL } from '../../utils/util';
import { SHOW_SEARCH_QUERY_PARAM_NAME } from '../../helpers/route.config';

@Component({
  selector: 'tvm-top-bar-search',
  templateUrl: './top-bar-search.component.html',
  styleUrls: ['./top-bar-search.component.scss']
})
export class TopBarSearchComponent {

  input: string = '';
  showInput: boolean = false;
  showSuggestions: boolean = false;

  constructor(private _router: Router) {
  }

  onInputKeyUp: (event: KeyboardEvent) => void = event => {
    if (event.key === 'Enter') {
      const sanitizedTerm = UTIL.sanitizeSearchTerm(this.input);
      this._router.navigate(['.', 'search'], {
        queryParams: { [SHOW_SEARCH_QUERY_PARAM_NAME]: sanitizedTerm }
      })
        .then(() => {
          this.input = '';
          this.showInput = false;
        });
    }
  };
}
