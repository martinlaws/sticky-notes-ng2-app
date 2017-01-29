import { Injectable } from '@angular/core';
import { ApiService } from './api';
import 'rxjs/Rx';

@Injectable()
export class NoteService {
  path: string = '/notes';
  constructor(private apiService: ApiService) {

  }

  createNote(note) {
    return this.apiService.post(this.path, note);
  }

  getNotes() {
    let savedNotes = this.apiService.get(this.path);
    return savedNotes;
  }

  completeNote(note) {
    return this.apiService.delete(`${this.path}/${note.id}`);
  }
}
