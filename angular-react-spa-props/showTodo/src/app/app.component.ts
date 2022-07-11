import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomProps, mountRootParcel, } from 'single-spa';
import { } from 'src/single-spa/single-spa-props';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: any = []
  mountRootParcel = mountRootParcel

  addTodo(task: any) {
    this.todos.push(task)
  }
  async config() {
    return (window as any).System.import("@react/addTodo")
  }

}
