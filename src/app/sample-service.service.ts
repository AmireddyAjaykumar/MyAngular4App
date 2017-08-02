import { Injectable } from '@angular/core';

@Injectable()
export class SampleServiceService {

  constructor() { }

  names = ["Sachin", "Dravid", "Sehwag"];

  myData(){
    return "sample data from sample service";
  }

}
