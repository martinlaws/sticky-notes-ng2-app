import { Component, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],
  template: `
    <div
      class="note-creator shadow-2"
      [ngStyle]="{'background-color': newNote.color}"
    >
      <form
        class="row"
        (ngSubmit)="onCreateNote()"
      >
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="fullForm"
        >
        <input
          type="text"
          (focus)="toggleFullForm(true)"
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
        >
        <div
          class="actions col-xs-12 row between-xs"
          *ngIf="fullForm"
        >
          <div className="col-xs-3">
            <color-picker
              [colors]="colors"
              (selected)="onColorSelect($event)"
            >
            </color-picker>
          </div>
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
    </div>
  `
})
export class NoteCreator {
  @Output() createNote = new EventEmitter;

  constructor(private _elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: any) {
        if (this.fullForm) {
            const clickedInside = this._elementRef.nativeElement.contains(targetElement) || targetElement.classList.contains('color-picker');
            if (!clickedInside) {
                this.toggleFullForm(false);
            }
        }
    }

  colors: string[] = ['#ACF39D', '#9CFFFA', '#E3B5A4', '#E85F5C', 'papayawhip']

  newNote = {
    title: '',
    value: '',
    color: 'white'
  };

  fullForm: boolean = false;

  onCreateNote() {
    const { title, value, color } = this.newNote;

    if (title && value) {
      this.createNote.next({ title, value, color });
    }

    this.reset();
    this.toggleFullForm(false);
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };
  }

  toggleFullForm(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newNote.color = color;
  }
};
