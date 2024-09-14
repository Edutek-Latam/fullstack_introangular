import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styles: ``
})
export class TotalComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    //throw new Error('Method not implemented.');
  }
  @Input() valor : number =0;
}
