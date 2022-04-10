import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesskey-secretkey',
  templateUrl: './accesskey-secretkey.component.html',
  styleUrls: ['./accesskey-secretkey.component.css']
})
export class AccesskeySecretkeyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveAuthCredentials(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

/*    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })*/
    this.router.navigate(['/landing']);
    console.log(username, password)
  }

}