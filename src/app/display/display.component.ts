import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

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

}
