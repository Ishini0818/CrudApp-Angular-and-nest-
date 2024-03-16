import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent{

  users: any[] = [];
  message: string = '';

  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const apiUrl = 'http://localhost:3000/users'; // Example API URL

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        console.log('GET Request Response:', data);
        this.users = data;
      },
      (error) => {
        this.message = 'Error Occurred while fetching users';
      },
    );
  }

  DeleteSingleUser = (id: number) => {
    // Ask a yes or no question using confirm
    var userConfirmed = confirm('Do you want to proceed?');

    // Check if the user clicked "OK" or "Cancel" and display a message accordingly
    if (userConfirmed) {
      const apiUrl = `http://localhost:3000/users/${id}`;

    this.http.delete(apiUrl).subscribe(
      (data: any) => {
        this.message = `DELETE Request is successful...`;
        this.fetchUsers();
      },
      (error) => {
        this.message = 'Error Occurred while deleting user';
      },
    );
    }
  };

}
