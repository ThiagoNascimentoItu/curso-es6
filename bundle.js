"use strict";

// class TodoList {
//     constructor (){
//         this.todos = [];
//     }
//     static addTodo(){
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }
// }
var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
