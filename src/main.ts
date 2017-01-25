import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/app';
import { Main, NotesContainer } from './app/containers'
import { AppBar, NoteCard } from './app/ui';

@NgModule({
  declarations: [
    App,
    Main,
    NotesContainer,
    AppBar,
    NoteCard
  ],
  imports: [BrowserModule],
  bootstrap: [App]
})

export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
