import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() handleAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text.length) {
      alert("Please write task!");
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.handleAddTask.emit(newTask)

    //Clear inputs after submit
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
