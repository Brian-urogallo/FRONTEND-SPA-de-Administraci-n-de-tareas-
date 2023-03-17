import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {
  form: FormGroup;
  id: string = '';
  operation : string = 'Agregar ';

  constructor( private fb: FormBuilder,
               private router: Router, 
               private _taskService: TaskService,
               private aRouter: ActivatedRoute) { 
   
    this.form = this.fb.group({
      title:['', Validators.required],
      description:['', Validators.required],
      dateInit:['', Validators.required],
      dateEnd:['']
    })
     this.id = String(aRouter.snapshot.paramMap.get('id')?? '')

     console.log(this.id)
    
  }
  
  ngOnInit(): void {
    if(this.id != ''){
      this.operation = 'Editar ';
      this.getTask(this.id);
    }
  }

  getTask(id: string){
      this._taskService.getTask(id).subscribe((data : Task) =>{
      this.form.setValue({
        title: data.title,
        description: data.description,
        dateInit: data.dateInit,
        dateEnd: data.dateEnd
      })
    })
    
  }

  addTask(){
     const task: Task = {
      title: this.form.value.title,
      description: this.form.value.description,
      dateInit: this.form.value.dateInit,
      dateEnd: this.form.value.dateEnd,
    };

    if (this.id !== '') {
      // edit task
      task._id = this.id
      this._taskService.updateTask(this.id, task).subscribe(()=>{
        alert('Se edito la tarea');
        this.router.navigate(['/']);
      })

    } else {
      // add new Task
      this._taskService.addTask(task).subscribe(() => {
        alert('Tarea agregada correctamente');
        this.router.navigate(['/']);
      },
      (error) => {
        alert('Error al agregar la tarea');
      });
    }
  }

}
