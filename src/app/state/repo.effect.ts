import {Injectable, inject} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map} from 'rxjs';
import {GithubReposService} from '../github-repos.service';
import {repoActions} from './repo.actions';

@Injectable()
export class RepoEffects {
  #actions$ = inject(Actions);
  #github = inject(GithubReposService);

  // create an effect that will send a request to a server to grab a list of github repositories when the action setRepos happens
  // setRepos$ = createEffect(() => {
  //   return this.#actions$.pipe(
  //     ofType(repoActions.readRepos.toString()),
  //     exhaustMap(() => this.#github.getRepos().pipe(map(repos => repoActions.setRepos({repos}))))
  //   );
  // });
}
