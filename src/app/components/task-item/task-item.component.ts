import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() handleDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() handleToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleDelete(task: Task) {
    this.handleDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.handleToggleReminder.emit(task);
  }
}
