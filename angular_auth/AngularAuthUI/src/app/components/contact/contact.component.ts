import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  query!:FormGroup

  constructor(private fb1: FormBuilder, private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
    this.query = this.fb1.group({
      email: [""],
      name : [""],
      reason : [""]

    })
  }

  onAdd(){
    
      console.log(this.query.value);
      this.auth.add(this.query.value)
      .subscribe({
        next: (res=>{
          console.log("Hello");
          
          alert(res.message);
          // this.signUpForm.reset();
          this.router.navigate(['dashboard'])
        }),
        error: (err=>{
          alert(err?.error.message)
        })
      })
       
    
    
    
  }


}
