import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  name = "";
  email = "";
  password = "";

  constructor(private http: HttpClient){}

  register(){
    this.http.post("http://localhost:4000/register",{
      name:this.name,
      email:this.email,
      password:this.password
    }).subscribe((res)=>{
      alert("Registered Successfully");
    });
  }

}