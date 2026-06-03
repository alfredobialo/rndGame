import {Component, signal} from '@angular/core';
import {form,  FormField} from '@angular/forms/signals';

@Component({
  selector: 'gm-user-form',
  imports: [FormField],
  template: `
    <p class="text-pink-500 text-2xl">User Registration Form</p>
    <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <form class="space-y-4">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="firstName"
            [formField]="frm.firstName"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
              hover:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name:</label>
          <input
            type="text"
            id="lastName"
            [formField]="frm.lastName"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                   hover:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            [formField]="frm.email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                   hover:border-blue-500 transition duration-150 ease-in-out"
          />
        </div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          Submit
        </button>
      </form>
      <div class="mt-4 p-4 bg-gray-100 rounded-md">
        <h3 class="text-lg font-medium text-gray-900">Current User Data:</h3>
        <p><strong>First Name:</strong> {{ frm.firstName().value() }}</p>
        <p><strong>Last Name:</strong> {{ userModel().lastName }}</p>
        <p><strong>Email:</strong> {{ userModel().email }}</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class UserForm {

  userModel  = signal<IUser>({
    firstName: "",
    lastName:"",
    email:"",
  });

  frm = form(this.userModel);


}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}
