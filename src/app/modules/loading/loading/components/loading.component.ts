import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'tvm-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  @Input()
  set isVisible(value: boolean) {
    this.display = value ? 'initial' : 'none';
  }

  @Input()
  set loadingText(value: string) {
    this.text = value;
  }

  @Input()
  set isSmall(value: boolean) {
    this.small = value;
  }


  @HostBinding('style.display')
  display: 'none' | 'initial' = 'none';
  text: string = '';
  small: boolean = false;

}
