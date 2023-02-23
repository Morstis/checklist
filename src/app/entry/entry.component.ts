import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnChanges, AfterViewInit {
  @Input() entry = {
    data: 'test',
    checked: true,
  };
  @Output() entryChange = new EventEmitter();
  @Output() removed = new EventEmitter();
  @ViewChild('focus') focus!: ElementRef<HTMLInputElement>;

  remove() {
    this.removed.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.entryChange.emit(this.entry);
  }

  ngAfterViewInit(): void {
    this.focus.nativeElement.focus();
  }
}
