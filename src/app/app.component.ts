import { Component, enableProdMode } from '@angular/core';
import { SampleServiceService } from './sample-service.service';

enableProdMode();

@Component({
  selector: 'app-root',
  // template: `<h1>Hello, Welcome to Angular 4</h1>
  // <p>How are you doing?</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';

  myObject = {
    Name : 'Ajay Kumar',
    Location : 'Hyderabad'
  };
  
  mystrArr = ["Ajay", "Kumar", "Amireddy"];

  buttonStatus='enabled';

  myEvent(event)
  {
    console.log(event);
  }

  orangeClass = 'btn-success';

  multipleClasses={
    'btn':true,
    'btn-large':true,
    'btn-bold':true
  }

  btnColor=true;

  titleStyles = {
    'color':'orange',
    'font-size': '20px'
  }

  constructor(private dataservice:SampleServiceService){

  }

  sampleText:string = '';

  ngOnInit() {
      console.log(this.dataservice.names);
      this.sampleText = this.dataservice.myData();
  }
}
