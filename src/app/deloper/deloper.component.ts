import { Component, OnInit } from '@angular/core';
import {Developer} from '../models/developer.model'

@Component({
  selector: 'app-deloper',
  templateUrl: './deloper.component.html',
  styleUrls: ['./deloper.component.css']
})
export class DeloperComponent implements OnInit{
Dev1: Developer = new Developer("Eric","Reydet",42,"homme","Blablablablabla",[{name:"Java",logo: "logo",site: "site"},{name:"angular",logo: "logo_angular",site: "https://angular.io/"}])



ngOnInit(): void {
    console.log(this.Dev1)
}
}
