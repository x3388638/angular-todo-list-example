import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Task from '../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	@Input() task: Task;
	@Input() taskIndex;
	@Output() toggleEvent = new EventEmitter<any>();
	constructor() { }

	ngOnInit() {
	}

	toggleStatus(i) {
		this.toggleEvent.emit(i);
	}

}
