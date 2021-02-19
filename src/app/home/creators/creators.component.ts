import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  @Input() locale: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
