import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/Company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [
    {
      id: '123',
      name: 'Microsoft'
    },
    {
      id: 'ewq',
      name: 'Google'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
