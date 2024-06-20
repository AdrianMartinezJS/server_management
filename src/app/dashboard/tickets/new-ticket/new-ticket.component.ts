import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  // onSubmit(title: HTMLInputElement) {
  // console.dir(title.value);
  //   const titleValue = title.value;
  //   console.log(titleValue);
  // }
  // onSubmit(form: HTMLFormElement) {
  //   form.reset();
  // }
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; // help find childElements im Template
  // @ViewChildren(ButtonComponent) buttonComponent?: ElementRef<ButtonComponent>; // give an arary of ButtonComponents found in the template

  onSubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
}
