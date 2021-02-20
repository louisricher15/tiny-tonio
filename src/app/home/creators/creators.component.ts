import { Component, Input, OnInit } from '@angular/core';
import { faUser } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  @Input() locale: string = '';
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
