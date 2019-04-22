 const fs = require('fs');
 let todoList = [];

 const saveDB = () => {
     //convert the object in to a json file
     let data = JSON.stringify(todoList);
     fs.writeFile('db/data.json', data, (err) => {
         if (err) throw new Error('could not save');
     });

 }
 const loadDB = () => {
     try {
         todoList = require('../db/data.json');
     } catch (err) {
         todoList = [];
     }
 }
 const getList = () => {
     loadDB();
     return todoList;
 }
 const make = (description) => {
     loadDB();
     let todo = {
         description,
         completed: false
     };
     todoList.push(todo);
     saveDB();
     return todo;
 }
 const update = (description, completed = true) => {
     loadDB();
     let index = todoList.findIndex(task => task.description === description);
     if (index >= 0) {
         todoList[index].completed = completed;
         saveDB();
         return true;
     } else {
         return false;
     }
 }
 const erase = (description) => {
     loadDB();
     let newList = todoList.filter(task => { task.description !== description });
     if (todoList.length === newList.length) {
         return false;
     } else {
         todoList = newList;
         saveDB();
         return true
     }
 }

 module.exports = {
     make,
     getList,
     update,
     erase
 }