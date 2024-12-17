import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.component.html',
  styleUrl: './table-multiplication.component.css'
})
export class TableMultiplicationComponent {

@Input() n: number = 0;

}
