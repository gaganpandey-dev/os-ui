import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-request',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-request.html',
  styleUrl: './register-request.css'
})
export class RegisterRequest {

  student = {
    name: '',
    fatherName: '',
    mobileNumber: '',
    studentClass: '',
    section: ''
  };

  submitRequest() {
    console.log(this.student);

    alert(
      'Request Submitted Successfully'
    );
  }
}
