import {ChangeDetectionStrategy, Component, OnInit, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {GithubReposService} from './github-repos.service';
import {RepoCounterComponent} from './repo-counter/repo-counter.component';
import {Store} from '@ngrx/store';
import {repoActions} from './state/repo.actions';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RepoCounterComponent],
  template: `
    <app-repo-counter></app-repo-counter>
    <ul>
      <!-- <li *ngFor="let repo of repos$ | async;">
        {{ repo.name }}
      </li> -->

      @for(repo of (repos$ | async)?.data; track repo.id) {
      <li>
        {{ repo.name }}
      </li>
      }
    </ul>
  `,
})
export class AppComponent {
  #github = inject(GithubReposService);
  // #store = inject(Store);
  repos$ = this.#github.getRepos().result$;

  // ngOnInit() {
  //   this.#store.dispatch(repoActions.readRepos());
  //   // this.#github.getRepos().subscribe(repos => {
  //   //   this.#store.dispatch(repoActions.setRepos({repos}));
  //   // });
  // }
}
