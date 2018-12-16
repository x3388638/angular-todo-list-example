import { Component, Input, Output, EventEmitter } from '@angular/core';
import Task from '../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
	@Input() task: Task;
	@Input() taskIndex;
	@Output() toggleEvent = new EventEmitter<any>();
	@Output() delEvent = new EventEmitter<any>();

	toggleStatus(i) {
		this.toggleEvent.emit(i);
	}

	handleDel(e, i) {
		e.stopPropagation();
		this.delEvent.emit(i)
	}
}
