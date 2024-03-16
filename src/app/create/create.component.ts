import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  inputname: string='';
  inputemail: string='';
  inputpw: string='';
  apidata:any;
  msg:string='';

constructor(private http: HttpClient) {}

onInputChange(field:string){
  switch(field){
    case 'name':
      console.log('Input name: ',this.inputname);
      break;

    case 'email':
      console.log('Input email: ',this.inputemail);
      break;

    case 'pw':
      console.log('Input password: ',this.inputpw);
      break;

    default:
      break;
        
  }
}
makeApiRequest() {
  if (this.inputname != '' && this.inputemail != '' && this.inputpw != '') {

    const apiUrl = 'http://localhost:3000/users'; // Example API URL

    const postData = {
      name: this.inputname,
      email: this.inputemail,
      password: this.inputpw,
    };

    this.http.post(apiUrl, postData).subscribe(
      (data: any) => {
        console.log('POST Request Response:', data);
        this.apidata = data;
        this.msg = ' - Data Inserted Successfully - '
        alert(this.msg)
        this.disableMsg();
        this.resetForm();
      },
      (error) => {
        this.msg = `Error Occurred while Inserting Data ${error.message}`
        this.disableMsg();
      },
    );
  } else {
    this.msg = '-> Please Fill All The Fields <-' 
    this.disableMsg();
  }
}
resetForm() {
  this.inputname = '';
  this.inputemail = '';
  this.inputpw = '';
}

// Disable the message after 3 seconds
disableMsg() {
  setTimeout(() => {
    this.msg = '';
  }, 3000);
}


}
