import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input-bar',
	templateUrl: './input-bar.component.html',
	styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {
	taskName: string;
	@Output() onAdd = new EventEmitter<any>();
	constructor() { }

	ngOnInit() {
	}

	handleAddTask(taskName) {
		if (taskName !== undefined) {
			this.onAdd.emit(taskName);
		}
	}
}
