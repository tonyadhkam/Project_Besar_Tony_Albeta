import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../event.model';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event:Event;
  @Input() index:number;
  // @Output() eventSelected=new EventEmitter<void>();

  // constructor(private eventService:EventService) { }

  ngOnInit() {
  }

  // onSelected(){
  //   // this.eventSelected.emit();
  //   this.eventService.eventSelected.emit(this.event);
  // }

}
