import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  constructor(protected elementRef: ElementRef) {
    // console.log(elementRef); Programatic access to the Host element
  }

  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  onClick() {
    console.log('clicked', this.el);
    console.log('clicked', this.control);
  }
}
