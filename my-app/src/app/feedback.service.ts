import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  get_data(){
    return this.http.get("https://cs251-outlab-6.herokuapp.com/initial_values/");
  }

  post_data(to_post){
    return this.http.post("https://cs251-outlab-6.herokuapp.com/add_new_feedback/", to_post);
  }
}
