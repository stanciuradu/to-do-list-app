// este o componenta simpla care mapeaza prin Array si afiseaza sub forma de lista todo-urile
import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList(props) {
  // din obiectul props iau datele deste doto-rui

  // apelarea functiei de stergere din App
  function deletList(todoList) {
    props.handleDeletList(todoList);
  }
  const { todos } = props;
  return (
    <div className="to-do-list">
      {/* partea de mapare si afisare sub forma de lista a datelor din Array */}
      {/* se itereaza array-ul si se returneaza cate un Item, la momentul submiterii formularului */}
      {todos.map((todo, index) => {
        return (
          <ToDoItem
            title={todo.title}
            description={todo.description}
            date={todo.date}
            key={index}
          />
        );
      })}
      {/* button pentru stergerea listei de todo in care pasez functia deletList */}
      <button onClick={deletList}>Sterge lista de todo</button>
    </div>
  );
}

export default ToDoList;
