
import React,{useState} from 'react';
import Addtodo from './components/Addtodo';
import Listtodo from './components/Listtodo';
import Completedtodo from './components/Completedtodo';
import './App.css';


function App() {
  const [todolists, setTodolists] = useState([
    {
        id:Math.random(),
        text: 'Hello Armenia',
        isToggle: false
    },
    {
        id:Math.random(),
        text: 'Hello USA',
        isToggle: false
    },
    {
        id:Math.random(),
        text: 'Hello Russia',
        isToggle: true
    }
 ]);

 function onadd(text){
  setTodolists([
    ...todolists,
    {
      id:Math.random(),
      text: text,
      isToggle: false
    }
  ]);
 }
 function onClearToggle(){
    if (window.confirm('You want to delette ?')) {
      setTodolists(todolists.filter((todo) => !todo.isToggle));
    }
} 

  return (
    <div className="App">
      <div className="todolist">
        <h1 className="title">Todo List</h1>
        <div className="todolist__content">

          <Addtodo onAdd={onadd} />
          <Listtodo 
          todolists={todolists} 
          addcheked={(newTodo) => {
            setTodolists(
                todolists.map((todolist) => {
                if(todolist.id === newTodo.id){
                  return newTodo;
                }
                return todolist;
              }
            ));
          }} 
          xDelete={(todolist) =>{
            setTodolists(todolists.filter((t) => t.id !== todolist.id));
          }} 
          />
          <Completedtodo todolists={todolists} onClearToggle={onClearToggle} />
        
        </div>
      </div>
    </div>
  );
}

export default App;
