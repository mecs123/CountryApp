import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{


  ngOnInit(): void {
   this.registro
   .pipe(
    debounceTime(500)
   ).subscribe(data =>{
    this.onDebounce.emit(data)
   })
  }

  private registro:Subject<string> = new Subject<string>()

  @Input()
   public initialValue: string = ' '

  @Input()
  public placeholder: string=''

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  emmitValue(value:string){
    this.onValue.emit(value)
  }

  onKeyPress(eventPres: string){
   this.onDebounce.emit(eventPres)
  }
  ngOnDestroy(): void {
    this.registro.unsubscribe()
  }
}
