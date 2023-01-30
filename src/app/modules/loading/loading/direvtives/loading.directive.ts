import { ComponentRef, Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { LoadingComponent } from '../components/loading.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[tvmLoading]'
})
export class LoadingDirective implements OnInit {

  @Input('tvmLoading')
  set isVisible(value: boolean) {
    this._isVisible = value;
    if (this._loadingAnimation)
      this._loadingAnimation.instance.isVisible = value;
  }

  @Input()
  set loadingText(value: string) {
    this._loadingText = value;
    if (this._loadingAnimation)
      this._loadingAnimation.instance.loadingText = value;
  }

  @Input()
  set smallLoading(value: any) {
    this._isSmall = coerceBooleanProperty(value);
    if (this._loadingAnimation)
      this._loadingAnimation.instance.isSmall = this._isSmall;
  }

  private _isVisible: boolean = false;
  private _isSmall: boolean = false;
  private _loadingText: string = '';
  private _loadingAnimation!: ComponentRef<LoadingComponent>;

  constructor(private viewContainerRef: ViewContainerRef, private _elementRef: ElementRef, private _render: Renderer2) {
  }

  ngOnInit(): void {
    this.setupHostElement();
    this.createLoadingComponent();
  }

  private setupHostElement() {
    this._render.setStyle(this._elementRef.nativeElement, 'position', 'relative');
  }

  public createLoadingComponent() {
    this._loadingAnimation = this.viewContainerRef.createComponent(LoadingComponent);
    this._loadingAnimation.instance.isVisible = this._isVisible;
    this._loadingAnimation.instance.loadingText = this._loadingText;
    this._loadingAnimation.instance.isSmall = this._isSmall;
    this._render.appendChild(this._elementRef.nativeElement, this._loadingAnimation.location.nativeElement);
  }
}
