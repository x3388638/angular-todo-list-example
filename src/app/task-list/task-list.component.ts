import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Task from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
	@Input() taskList: Task[];
	@Output() toggleEvent = new EventEmitter<any>();
	@Output() delEvent = new EventEmitter<any>();
	constructor() { }

	ngOnInit() {
	}

	onToggle(index) {
		this.toggleEvent.emit(index);
	}

	onDel(index) {
		this.delEvent.emit(index);
	}
}
