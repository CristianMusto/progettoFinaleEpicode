import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user/user';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
  }

  signup(user: User) {
    this.signupService.signUp(user).subscribe(data => {
      
    })
  }

}
