import { Component,inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements OnInit{
  
 
  private accountService = inject(AccountService)
  title = 'Dating App';
  
  // This is the main component of the Angular application.  
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user')
    if (!userString) return;
    const user = JSON.parse(userString)
    this.accountService.currentUser.set(user)
  }

  
}
 