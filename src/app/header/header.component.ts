import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private http: HttpClient) {}
  logOut(accountType: string) {
    localStorage.removeItem(accountType);
    alert('Logout Successfully');
    setTimeout(() => {
      this.navigateTo('/');
    }, 2000);
  }
  navigateTo(toPath: any) {
    this.router.navigate([toPath]);
  }
  getUserType() {
    let userType =
      localStorage.getItem('userId') != null
        ? 'user'
        : localStorage.getItem('adminId') != null
        ? 'admin'
        : 'no-user';
    return userType;
  }
}
