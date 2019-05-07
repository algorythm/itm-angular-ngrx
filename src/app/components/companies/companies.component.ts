import { Component, OnInit } from '@angular/core';
import { Company } from 'src/models/Company';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CompanyState, getCompanies } from 'src/reducers/company.reducer';
import * as companyActions from '../../../actions/company.actions';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies$: Observable<Company[]>;

  constructor(private store: Store<CompanyState>) {
    this.companies$ = this.store.select(getCompanies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompanies());
  }
}
