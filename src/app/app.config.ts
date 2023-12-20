import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {repoReducer} from './state/repo.reducer';
import {RepoEffects} from './state/repo.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      repos: repoReducer,
    }),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideEffects(),
  ],
};
