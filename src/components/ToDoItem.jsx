// este o componenta simpla de forma unui Item care primeste ca parametru obiecctul prosps iar prin destructuring ia cheile de interes din obiect
import React from 'react';

function ToDoItem(props) {
    const{title,description,date}=props;
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{date}</p>
        </div>
    )
}

export default ToDoItem;
