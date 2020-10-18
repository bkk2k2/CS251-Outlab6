import { Component, OnInit } from '@angular/core';

import { FeedbackService } from '../feedback.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public feedback_form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    feedback: new FormControl(''),
    comment: new FormControl('') 
  });
  public out: string = "";

  constructor(private from_service: FeedbackService) { }

  ngOnInit(): void {
    this.from_service.get_data()
      .subscribe(data => this.feedback_form.setValue(data));
  }
  
  Submit(){
    this.out = '';
    this.from_service.post_data(this.feedback_form.value)
      .subscribe(
        response => this.out='true',
        error => this.out='false'
      );
  }
}
