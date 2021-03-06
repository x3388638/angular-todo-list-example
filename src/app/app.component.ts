import { Component } from '@angular/core';
import Task from './Task';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	taskList: Task[] = [
		{ name: 'Hit the gym', done: false },
		{ name: 'Pay bills', done: true },
		{ name: 'Meet George', done: false },
		{ name: 'Buy eggs', done: false },
		{ name: 'Read a book', done: false },
		{ name: 'Organize office', done: false },
	];

	handleAddTask(taskName) {
		this.taskList.push({
			name: taskName,
			done: false
		});
	}

	onToggleStatus(index) {
		this.taskList[index].done = !this.taskList[index].done;
	}

	onDel(index) {
		this.taskList = [...this.taskList.slice(0, index), ...this.taskList.slice(index + 1, this.taskList.length)]
	}
}
