import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tvm-fetch-error',
  templateUrl: './fetch-error.component.html',
  styleUrls: ['./fetch-error.component.sass']
})
export class FetchErrorComponent {

  @Output() retryButtonClick: EventEmitter<void> = new EventEmitter<void>();

  onRetryButtonClick: () => void = () => this.retryButtonClick.emit();
}
