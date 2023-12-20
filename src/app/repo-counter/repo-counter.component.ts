import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {GithubReposService} from '../github-repos.service';
import {CommonModule} from '@angular/common';

/**
 * this should count the number of repo
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-repo-counter',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>the number of repos are {{ (repos$ | async)?.data?.length }}</p> `,
})
export class RepoCounterComponent {
  #github = inject(GithubReposService);
  repos$ = this.#github.getRepos().result$;
}
