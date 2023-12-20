import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createReducer, on, createFeatureSelector} from '@ngrx/store';
import {Repo} from '../repo';
import {repoActions} from './repo.actions';

export type State = {
  repos: RepoState;
};

export interface RepoState extends EntityState<Repo> {}

export const adapter: EntityAdapter<Repo> = createEntityAdapter<Repo>();

export const repoReducer = createReducer(
  adapter.getInitialState(),
  on(repoActions.setRepos, (state, {repos}) => adapter.setAll(repos, state))
);

const {selectAll, selectEntities} = adapter.getSelectors();
