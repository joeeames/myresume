import { InjectionToken } from '@angular/core';


import * as faunadb from 'faunadb';

(window as any)['global'] = window;
export const client = new faunadb.Client({secret: 'fnAEIW4pdnACCmGW4mvKhZL7ZXqSaWwRZmzu_b-a'});


export const FAUNADB_CLIENT = new InjectionToken<faunadb.Client>('faunadb')
