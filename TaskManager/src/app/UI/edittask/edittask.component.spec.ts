import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EdittaskComponent } from './edittask.component';
import {RouterTestingModule} from '@angular/router/testing'
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../Services/shared.service';
import {HttpModule} from '@angular/http';
import { Http, Response } from '@angular/http';
import { Task } from './../../Models/task';

describe('EdittaskComponent', () => {
  let component: EdittaskComponent;
  let fixture: ComponentFixture<EdittaskComponent>;
  let response :any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittaskComponent ],
      imports : [FormsModule,RouterTestingModule,HttpModule],
      providers : [SharedService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update task',inject([SharedService], (service : SharedService) => {
    expect(service).toBeTruthy();
  
    let  taskData = new Task()
    taskData.taskName = "Test New 1";
    taskData.parentId = 1;
    taskData.startDate = '2018-08-25';
    taskData.endDate = '2018-08-30';
    taskData.priority = 10;
    taskData.taskId = 2;
  
    service.UpdateTask(taskData).subscribe((res: Response) => {
      response = res.json();
    expect(response).toBeTruthy;
    });
  
    const element = fixture.nativeElement;
    fixture.detectChanges();
  }));
  
});
