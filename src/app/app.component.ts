import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: any[] = [
    {
      'name': 'Pizza',
    },
    {
      'name': 'Pasta',
    },
    {
      'name': 'Wrap'
    },
    {
      'name': 'Pastry'
    },
    {
      'name': 'Cake'
    },
    {
      'name': 'Sausage'
    },
    {
      'name': 'Lasagna'
    },
    {
      'name': 'Bread'
    },
    {
      'name': 'Cookie'
    },
    {
      'name': 'Fruit'
    },
    {
      'name': 'Juice'
    },
    {
      'name': 'Pop'
    }
  ];
}
