import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { App, providers } from './app';
import { Main, NotesContainer } from './app/containers'
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './app/ui';

@NgModule({
  declarations: [
    App,
    Main,
    NotesContainer,
    AppBar,
    NoteCard,
    NoteCreator,
    ColorPicker
  ],
  providers,
  imports: [BrowserModule, FormsModule, HttpModule],
  bootstrap: [App]
})

export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);
