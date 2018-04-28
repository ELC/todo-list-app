import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  items;
  currentId;
  inputValue;
  
  ngOnInit() { 
    this.currentId = JSON.parse(sessionStorage.getItem('currentId'));
    if(!this.currentId){
      this.currentId = 0;
    }

    this.items = JSON.parse(sessionStorage.getItem('items'));
    if(!this.items){
      this.items = [];
    }
  }

  findItem(itemId){
    return this.items.find(e => e.elementId === itemId)
  }

  saveItems(){
    sessionStorage.setItem('items', JSON.stringify(this.items));
  }

  saveCurrentId(){
    sessionStorage.setItem('currentId', JSON.stringify(this.currentId));
  }

  toggle(itemId){
    let found = this.findItem(itemId)
    if (found === undefined){
      return
    }
    found.finished = !found.finished
    this.saveItems();
  }

  delete(itemId){
    let found = this.findItem(itemId)
    if (found === undefined){
      return
    }
    this.items = this.items.filter(e => e != found)
    this.saveItems();
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
    
    this.saveCurrentId()
    this.saveItems();
  }
}
