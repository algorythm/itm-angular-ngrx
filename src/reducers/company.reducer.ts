import * as companyActions from '../actions/company.actions';
import { LoadingState } from 'src/models/LoadingState';
import { Company } from 'src/models/Company';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CompanyState {
    companiesLoaded: LoadingState;
    companies: Company[];
}

const initialState: CompanyState = {
    companiesLoaded: LoadingState.NOT_LOADED,
    companies: [],
};

export function companyReducer(
    state = initialState,
    action: companyActions.Action
) {
    switch (action.type) {
        case companyActions.LOAD_COMPANIES_SUCCESS:
        case companyActions.LOAD_COMPANIES_FAIL:
            return {
                ...state,
                companies: action.payload
            };
        default:
            return state;
    }
}

export const getCompaniesState = createSelector(
    createFeatureSelector('company'),
    (state: any) => state
);

export const getCompanies = createSelector(
    getCompaniesState,
    (state: CompanyState) => state.companies
);
