import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string=''

  @Output()
  public onValue = new EventEmitter<string>();

  emmitValue(value:string){
    this.onValue.emit(value)

  }

}
