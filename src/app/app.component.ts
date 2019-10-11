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
    this.todos.splice(i, 1); // privide it the index (i), and splice out 1 single item
  };
  filterCompleted = function() { // this function removes everything that was flagged as completed.
    const oldTodos = this.todos; // holding an old todos variable for the current dataset
    this.todos = []; // empty out the array
    oldTodos.forEach(t => { // loop through this array
      if (!t.done) { // if the todo is not done..
        this.todos.push(t); // then push into the array each item that has been completed.
        // console.log(" this is where the strikethrough code should go ");
      }
    });
  };

  add = function() {
    const t = {name: this.newTodo, done: false}; // false is the default value, this is how new items will initially be created
    this.todos.push(t);
    this.newTodo = '';
  };
}

