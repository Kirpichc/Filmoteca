import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'digital-department-application';

  greeting = "";
  users: any[] = [];

  ngOnInit(): void {
    console.log('проверка');
  }
  
  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
  
}
