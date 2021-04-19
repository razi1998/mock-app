import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ChildComponent from "./ChildComponent";
import Home from './Home';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Student from './Student';
import NewStudent from './NewStudent';

const App = () => {
  const [state, setState] = useState({
    students: [{
      "id": "001",
      "FirstName": "Raj",
      "LastName": "Sharma",
      "age": "13",
      "clas": "8th",
      "percent": 65
    },
    {
      "id": "002",
      "FirstName": "Shreyansh",
      "LastName": "Sharma",
      "age": "16",
      "clas": "10th",
      "percent": 78
    },
    {
      "id": "003",
      "FirstName": "Rajesh",
      "LastName": "Prasad",
      "age": "10",
      "clas": "5th",
      "percent": 80
    },
    {
      "id": "004",
      "FirstName": "Sanjana",
      "LastName": "Grover",
      "age": "18",
      "clas": "12th",
      "percent": 67
    },
    {
      "id": "005",
      "FirstName": "Kajal",
      "LastName": "Kumari",
      "age": "8",
      "clas": "3rd",
      "percent": 20
    },
    {
      "id": "006",
      "FirstName": "Tarak",
      "LastName": "Bansal",
      "age": "19",
      "clas": "12th",
      "percent": 48
    },
    {
      "id": "007",
      "FirstName": "Sharad",
      "LastName": "Sharma",
      "age": "16",
      "clas": "10th",
      "percent": 67
    },
    {
      "id": "008",
      "FirstName": "Ankur",
      "LastName": "Singh",
      "age": "17",
      "clas": "11th",
      "percent": 76
    },
    {
      "id": "009",
      "FirstName": "Raj",
      "LastName": "Kumar",
      "age": "14",
      "clas": "9th",
      "percent": 78
    },
    {
      "id": "010",
      "FirstName": "Sachin",
      "LastName": "Singhania",
      "age": "13",
      "clas": "8th",
      "percent": 64
    },
    {
      "id": "011",
      "FirstName": "Raj",
      "LastName": "Kapoor",
      "age": "11",
      "clas": "5th",
      "percent": 72
    },
    {
      "id": "012",
      "FirstName": "Virat",
      "LastName": "Singh",
      "age": "17",
      "clas": "12th",
      "percent": 84
    },
    {
      "id": "013",
      "FirstName": "Abhishek",
      "LastName": "Hela",
      "age": "12",
      "clas": "6th",
      "percent": 54
    },
    {
      "id": "014",
      "FirstName": "Rohan",
      "LastName": "Sinha",
      "age": "8",
      "clas": "3rd",
      "percent": 85
    },
    {
      "id": "015",
      "FirstName": "Navneet",
      "LastName": "Kumar",
      "age": "16",
      "clas": "12th",
      "percent": 90
    }]
  });


  const setSelectedStudent = (id) => {
    setState({
      ...state,
      selectedStudent: id
    })
  }



  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/students" component={() => <ChildComponent students={state.students} setSelectedStudent={setSelectedStudent} />} />

          <Route path="/student/:id" component={(props) =>
            <Student student={state.students.find(student => student.id === props.match.params.id)} />} />

          <Route path="/addnew" component={() => <NewStudent student={
            {
              id: "",
              FirstName: "",
              LastName: "",
              age: "",
              clas: "",
              percent: ""

            }} />} />

          <Route path="/" component={NotFound} />

        </Switch>
      </BrowserRouter>

    </div >
  );
}


export default App;


