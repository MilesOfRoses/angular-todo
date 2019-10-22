// make it so that the filter checks eac time a character is entered (think google autofill )

import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  manualBoolean = false;

  title = 'ng2todo';

  // The section that flags checked tasks as boolean "true" or "false"
  todos = [ // this is the primary storage variable, the todos array.
    {name: 'Walk the Dog', done: false}, // pre populating with a few examples of dummy data local static data
    {name: 'Go to the Store', done: true},
    {name: 'Get Gas', done: false},
    {name: 'Wash the Car', done: false}
  ];

  newTodo = ''; // for the storage of data on the "new interface"

  filterText: string;

  filteredTodos = [...this.todos]; // spread operator. *TAKEN FROM FAMILY MEMBER PROJECT*

  filterTodos() {
    console.log('the filter funcion has run');
    this.filteredTodos = this.todos.filter(
      item => item.name.toLowerCase() === this.filterText.toLowerCase() // toLowerCase() makes the filter not be case sensitive
    );
    if (!this.filterText) {
      this.filteredTodos = [...this.todos];
    }
  }

  remain = function() {
    let c = 0; // initializing the new counter incrementor variable 'c'
    this.todos.forEach(t => { // loop through this array using letter 't' as the iterator, since the parrent object is "todos"
      if (!t.done) { // if the current todo is not done...
        c++; // count incrementor
      }
      return c;
    });
  };

  del = function(i) {
    this.todos.splice(i, 1); // privide it the index (i), and splice out 1 single item *update* changed "filteredTodos" to "todos"
    this.filteredTodos.splice(i, 1); // privide it the index (i), and splice out 1 single item *update* changed "filteredTodos" to "todos"
    console.log('the delete function has run');
    const oldTodos = this.todos; // holding an old todos variable for the current dataset
    // this.todos = []; // empty out the array
    oldTodos.forEach(t => { // loop through this array
    });
  };

  add = function() {
    const t = {name: this.newTodo, done: false}; // false is the default value, this is how new items will initially be created
    this.filteredTodos.push(t); // for the add button
    this.todos.push(t); // for the filter feature... IDK why this works but I'll take it
    this.newTodo = '';
    console.log('something should have been added');
  };
}

