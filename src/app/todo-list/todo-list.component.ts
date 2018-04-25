import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  items = [];
  currentId;
  inputValue;

  ngOnInit() {
    this.currentId = 0
  }

  findItem(itemId){
    return this.items.find(e => e.elementId === itemId)
  }

  check(itemId){
    let found = this.findItem(itemId)
    if (found === undefined){
      return
    }
    found.finished = true
  }

  uncheck(itemId){
    let found = this.findItem(itemId)
    if (found === undefined){
      return
    }
    found.finished = false
  }

  delete(itemId){
    let found = this.findItem(itemId)
    if (found === undefined){
      return
    }
    this.items = this.items.filter(e => e != found)
  }

  addNew(){
    if (!this.inputValue) {
      return
    }
    let element = {
      name:this.inputValue, 
      elementId:this.currentId, 
      finished:false,
    };
    this.items.push(element)
    this.currentId++;
  }
}
