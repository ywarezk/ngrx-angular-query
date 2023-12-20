import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Repo} from '../repo';

export const repoActions = createActionGroup({
  source: 'Repo',
  events: {
    'Set Repos': props<{repos: Repo[]}>(),
    'Read Repos': emptyProps(),
  },
});
