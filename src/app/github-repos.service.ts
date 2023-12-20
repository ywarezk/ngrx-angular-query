import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repo} from './repo';
import {injectQuery} from '@ngneat/query';

@Injectable({
  providedIn: 'root',
})
export class GithubReposService {
  #http = inject(HttpClient);
  #query = injectQuery();

  /**
   * will send a request to a server to grab a list of github repositories
   */
  getRepos() {
    return this.#query({
      queryKey: ['repos'],
      queryFn: () => this.#http.get<Repo[]>('https://api.github.com/users/ajcrites/repos'),
      staleTime: 1000 * 30, // 24 hours
      refetchInterval: 1000 * 30, // 24 hours
    });
  }
}
