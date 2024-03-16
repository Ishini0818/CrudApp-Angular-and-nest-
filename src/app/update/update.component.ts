import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  users: any[] = [];
  selectedUser: any;
  message: string = '';
  isPopupVisible: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const apiUrl = 'http://localhost:3000/users';

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

  openUpdatePopup(user: any) {
    this.selectedUser = user;
    this.isPopupVisible = true;
  }

  closeUpdatePopup() {
    this.isPopupVisible = false;
  }

  updateUser(user: any) {
    const apiUrl = `http://localhost:3000/users/${user.id}`;
  
    this.http.put(apiUrl, user).subscribe(
      (data: any) => {
        alert('Update Successful ');
        this.fetchUsers();
      },
      (error) => {
        this.message = 'Error Occurred while updating user';
        alert(this.message)
      },
      () => {
        this.closeUpdatePopup();
      }
    );
  }
  
}
