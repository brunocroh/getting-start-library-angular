import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent implements OnInit{

  @Input() name: string = 'Bruno';

  ngOnInit(){

  }
}
