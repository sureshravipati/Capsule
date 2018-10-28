import { Injectable } from '@angular/core';
import { taskData, Task } from '../Models/task';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})

export class SharedService {

  taskdata: any;
  taskList: any;
  baseUrl="http://localhost:8080/tmapi/";

constructor(private httpServ: Http) { }
  
  addTaskUri = this.baseUrl+"AddTask";
  AddTask(data: Task) {
    return this.httpServ.post(this.addTaskUri, data);
  }

  getParentTaskUri = this.baseUrl+"ParentTask";
  GetParentTask(){
    return this.httpServ.get(this.getParentTaskUri);
  }

  getTaskListUri = this.baseUrl+"GetTaskList";

  GetTaskList(){
    return this.httpServ.get(this.getTaskListUri);
  }

  getTaskUri = this.baseUrl+"GetTaskById";
  GetTaskById(Id:number){
    return this.httpServ.get(this.getTaskUri+ "/"+Id);
  }

  updateTaskUri = this.baseUrl+"UpdateTask";
  UpdateTask(data: Task) {
    return this.httpServ.post(this.updateTaskUri, data);
  }

  endTaskUri = this.baseUrl+"EndTask";
  EndTask(data:Task){
    return this.httpServ.post(this.endTaskUri,data);
  }

  

}
