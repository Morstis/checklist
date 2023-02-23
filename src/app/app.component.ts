import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Simple Checklist';
  data = [
    {
      data: '',
      checked: false,
    },
  ];

  localSave() {
    localStorage.setItem('save', JSON.stringify(this.data));
  }

  ngOnInit(): void {
    const oldSave = localStorage.getItem('save');
    if (oldSave === null) return;
    this.data = JSON.parse(oldSave);
  }

  remove(i: number) {
    this.data.splice(i, 1);
  }
  add() {
    this.data.push({
      data: '',
      checked: false,
    });
  }
}
