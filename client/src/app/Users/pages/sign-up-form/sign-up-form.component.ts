import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  @Input() usersFromHomeComp: any;
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;
  maxDate: Date;
  validationErrors: string[] = [];

  constructor(private accountService: AccountService,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  initializeForm(){
    //Using form builder
    this.registerForm = this.formBuilder.group({
    username: ["",Validators.required],
    gender: ["male",Validators.required],
    knownAs: ["",Validators.required],
    dateOfBirth: ["",Validators.required],
    city: ["",Validators.required],
    country: ["",Validators.required],
    password: ["",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
    confirmPassword: ["",[Validators.required, this.matchValues('password')]]
    });

    //NOT using Form builder
    // this.registerForm = new FormGroup({
    // username: new FormControl("",Validators.required),
    // password: new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    // confirmPassword: new FormControl("",[Validators.required, this.matchValues('password')])
    // });

    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  matchValues(matchTo: string){
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : {isMatch: true}
    };
  }

  register(){
    this.accountService.register(this.registerForm.value).subscribe(response => {
      this.route.navigateByUrl('/members');
      // this.cancel();
    },error => {
      this.validationErrors = error;
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
