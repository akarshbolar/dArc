import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 gotoDraw(){
  console.log('clicked');
    this.router.navigate(['/draw']);  // define your component where you want to go
}
}
