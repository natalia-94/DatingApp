import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode: boolean;
  users: any;
  url: string = 'https://localhost:5001/api';  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registerModeToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegister(event: boolean){
    this.registerMode = event;
  }

}
