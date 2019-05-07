import { Injectable } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as companyActions from '../actions/company.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyEffects {

    constructor(
        private companyService: CompanyService,
        private action$: Actions
    ) { }

    @Effect() loadCompanies$: Observable<Action> = this.action$.pipe(
        ofType(companyActions.LOAD_COMPANIES),
        switchMap(() => {
            return this.companyService.getCompanies().pipe(
                map(resData => new companyActions.LoadComaniesSuccess(resData))
            );
        })
    );
}
