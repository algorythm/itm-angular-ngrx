import { Action } from '@ngrx/store';
import { Company } from 'src/models/Company';

export const LOAD_COMPANIES = '[Company] Load';
export const LOAD_COMPANIES_SUCCESS = '[Company] Load Success';
export const LOAD_COMPANIES_FAIL = '[Company] Load Fail';

export class LoadCompanies implements Action {
    readonly type = LOAD_COMPANIES;
    constructor() { }
}

export class LoadComaniesSuccess implements Action {
    readonly type = LOAD_COMPANIES_SUCCESS;
    constructor(public payload: Company[]) {}
}

export class LoadCompaniesFail implements Action {
    readonly type = LOAD_COMPANIES_FAIL;
    constructor(public payload: any) {}
}

export type Action =
    | LoadCompanies
    | LoadComaniesSuccess
    | LoadCompaniesFail;
