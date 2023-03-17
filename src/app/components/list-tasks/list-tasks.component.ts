import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  listTasks: Task[] =[];
  loading: boolean = false;
 
  constructor(private _taskService:TaskService) { }

  ngOnInit(): void {
   this.getListTasks();
  }

  getListTasks(){ 
   this.loading = true; 
   this._taskService.getListTasks().subscribe((data) =>{
    if(Array.isArray(data)) {
      this.listTasks = data;
      this.loading = false;
    }
    else {
      console.error("Error no se pudo recuperar la data");
    }
   })
  }

  deleteTask(id: string){
    this.loading = true;
    this._taskService.deleteTask(id).subscribe(() => {
      this.getListTasks();
      alert('Borrado con exito')
    })
  }
   
}
