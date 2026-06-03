import { Component } from '@angular/core';
import {UserForm} from '../formsApp/user-form';

@Component({
  selector: 'gm-signal-form-page',
  imports: [
    UserForm
  ],
  template: `
    <div class="p-6">
      <gm-user-form />
    </div>
  `,
  styles: ``,
})
export class SignalFormPage {}
