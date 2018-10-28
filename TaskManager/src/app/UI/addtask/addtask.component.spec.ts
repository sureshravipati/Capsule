import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AddtaskComponent } from './addtask.component';
import {RouterTestingModule} from '@angular/router/testing'
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../Services/shared.service';
import {HttpModule} from '@angular/http';
import { Http, Response } from '@angular/http';
import { Task } from './../../Models/task';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;
  let response :any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskComponent ],
      imports : [FormsModule,RouterTestingModule,HttpModule],
      providers : [SharedService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

it('should add new task',inject([SharedService], (service : SharedService) => {
  expect(service).toBeTruthy();

  let  taskData = new Task()
  taskData.taskName = "Test task one";
  taskData.parentId = null;
  taskData.startDate = '2018-08-25';
  taskData.endDate = '2018-08-30';
  taskData.priority = 5;

  service.AddTask(taskData).subscribe((res: Response) => {
    response = res.json();
  expect(response).toBeTruthy;
  });

  const element = fixture.nativeElement;
  fixture.detectChanges();
}));

});
