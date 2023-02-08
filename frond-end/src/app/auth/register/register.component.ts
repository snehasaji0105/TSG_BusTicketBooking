import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CredentialsService } from '../credentials.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: string | undefined;
  registerForm!: FormGroup;
  isLoading = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private credentialService: CredentialsService  ) {
    this.createForm();
  }
  ngOnInit(): void {}
  register() {
    console.log(this.registerForm.value)
    this.authenticationService.register(this.registerForm.value).subscribe(
      (res) => {
        this.router.navigate(['/login']);
      },
      (error: { error: { message: any; }; }) => {
        alert(error.error.message);
      }
    );
  }
  private createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      name: ['', Validators.required],
      
    });
  }
}