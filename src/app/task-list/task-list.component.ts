import { Component, Input, Output, EventEmitter } from '@angular/core';
import Task from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
	@Input() taskList: Task[];
	@Output() toggleEvent = new EventEmitter<any>();
	@Output() delEvent = new EventEmitter<any>();

	onToggle(index) {
		this.toggleEvent.emit(index);
	}

	onDel(index) {
		this.delEvent.emit(index);
	}
}
