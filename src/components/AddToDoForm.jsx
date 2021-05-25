// aceasta componenta este una de tip Class, pentru ca la inceput vom avea un state initial al inputurilor din formular, dupa care in functie de ce intoduce/alege utlizatorul starea acestora se va schimba
import React from "react";
class AddToDoForm extends React.Component {
  constructor() {
    super();
    // initializez starea initiala a inputurilor formularului
    this.state = {
      title: "",
      description: "",
      date: "",
    };
  }
  // metoa de schimbare a starii inputului title
  handleTitleChange(event) {
    const newTitle = event.target.value;
    this.setState({ title: newTitle });
  }
  // metoa de schimbare a starii inputului description
  handleChangeDescription(event) {
    const newDescription = event.target.value;
    this.setState({ description: newDescription });
  }
  // metoa de schimbare a starii inputului date
  handleChangeDate(event) {
    const newDate = event.target.value;
    this.setState({ date: newDate });
  }
  // metoda pentru submierea formularului
  handleSubmitForm(event) {
    // previn comportamentul default al formualarului
    event.preventDefault();
    // formez un todo
    const todo = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    };
    // apelez metoda handleUpdateUser cu this pentru a nu se pierde this-ul din App si pun .props deoarece metoda a fost trimisa ca props catre Componenta AddToDoForm
    this.props.handleUpdateToDos(todo);
    // resetarea formularului-reinitializez starea formularului cu setState si cu valorile initiale ale inputurilor
    this.setState({
      title: "",
      description: "",
      date: "",
    });
  }

  // prin metoda render randez pe ecran structura formularului
  render() {
    return (
      <div className="add-to-do-form">
        <form onSubmit={(event) => this.handleSubmitForm(event)}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={(event) => this.handleTitleChange(event)}
            value={this.state.title}
            className="form-control"
          />
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            onChange={(event) => this.handleChangeDescription(event)}
            value={this.state.description}
            className="form-control"
          />
          <label htmlFor="date">Date:</label>
          <input
            type="datetime-local"
            id="date"
            onChange={(event) => this.handleChangeDate(event)}
            value={this.state.date}
            className="form-control"
          />
          <input
            type="submit"
            value="Adauga task"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}
export default AddToDoForm;
