import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Main, NotesContainer } from './containers';

export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        component: NotesContainer
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
])
