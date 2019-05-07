import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/Company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getTodos().subscribe(c => {
      console.log('Fetched all companies', c);
      this.companies = c;
    });
  }
}
