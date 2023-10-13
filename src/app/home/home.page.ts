import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tasks: any[] = [];
  page = 1; // Current page
  itemsPerPage = 15; // Number of items per page
  totalTasks = 0; // Total number of tasks

  constructor(private taskService: TaskService) {}


  ngOnInit() {}

  ionViewDidEnter() {
    this.loadTasks();
  }

  loadTasks(event?: any) {
    this.taskService.getTasks(this.page, this.itemsPerPage).subscribe((data: any) => {
      if (event) {
        event.target.complete();
      }

      this.tasks = this.tasks.concat(data);
      this.totalTasks = data.length; // Update totalTasks based on the response

      if (data.length < this.itemsPerPage) {
        // All tasks are loaded
        if (event) {
          event.target.disabled = true;
        }
      } else {
        this.page++;
      }
    });
  }

  markAsCompleted(task: any) {
    task.completed = true;
  }

  loadMoreTasks() {
    this.page++;
    this.loadTasks();
  }


}