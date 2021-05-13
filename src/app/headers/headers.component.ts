import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  @Input() phone: string;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
