import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
	declarations: [
		AppComponent,
		InputBarComponent,
		TaskListComponent,
		TaskComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
