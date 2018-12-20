import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-input-bar',
	templateUrl: './input-bar.component.html',
	styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent {
	taskName: string;
	@Output() onAdd = new EventEmitter<any>();

	handleAddTask(taskName) {
		if (taskName !== undefined && taskName.trim() !== '') {
			this.onAdd.emit(taskName);
			this.taskName = '';
		}
	}
}
