import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App, providers, routes } from './app';
import { Main, NotesContainer, Auth } from './app/containers';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './app/ui';

@NgModule({
  declarations: [
    App,
    Main,
    Auth,
    NotesContainer,
    AppBar,
    NoteCard,
    NoteCreator,
    ColorPicker
  ],
  providers,
  imports: [BrowserModule, FormsModule, HttpModule, routes],
  bootstrap: [App]
})

export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
