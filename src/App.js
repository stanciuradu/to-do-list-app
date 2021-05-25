import React from "react";
import "./App.css";
import Header from "./components/Header";
import "./components/Header.css";
import ToDoList from "./components/ToDoList";
import AddToDoForm from "./components/AddToDoForm";
import "./components/AddToDoForm.css";
import "./components/ToDoList.css";

// in cadrul acestui fisier radacina vreau ca toate datele despre aplicatie sa fie tinute intr-un vector, adica in state
// deci, componenta va fi o class Component
// in Reaact clasele extind React.Component astfel incat sa putem utiliza metoda render, iar state-ul se initializeaza mereu in constructor
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      isFormDisplay: false,
    };
  }

  // metoda pentru schimbarea variabilei
  handleIsFormDisplay() {
    this.setState({ isFormDisplay: true });
  }

  // metoda pentru a actualiza state-ul partial al todo-urilor
  handleUpdateToDos(newTodos) {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, newTodos],
      };
    });
  }

  // metoda pentru stergerea listei de todo
  // daca se sterge lista, se actualizeaza state-ul din app cu un array gol, ca la inceput
  handleDeletList(todoList) {
    this.setState({ todos: [] });
  }

  render() {
    return (
      <div className="render">
        <Header />

        {/*operatorul ternar este in loc de if  */}
        {/* daca variabila este true, atnci afiseaza pe ecran componenta AddToDoForm ,altfel afiseza nimic*/}
        {this.state.isFormDisplay ? (
          <AddToDoForm
            handleUpdateToDos={(newTodos) => this.handleUpdateToDos(newTodos)}
          />
        ) : null}

        {/* randerz componenta todolist, careia ii trimit ca proprietatil todo-urile din state */}
        <ToDoList
          todos={this.state.todos}
          handleDeletList={(todoList) => this.handleDeletList(todoList)}
        />

        <div className="container">
          {/* buton pentru afisarea formularului */}
          <button id="buttonForm" onClick={() => this.handleIsFormDisplay()}>
            Afiseaza formularul
          </button>
        </div>
      </div>
    );
  }
}

export default App;
