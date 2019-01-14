import React, { Component } from "react";
import  PearsonUser  from "./PearsonUser";
import  "./Pearson.css";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    //this.removeDuplicates = this.removeDuplicates.bind(this);

    this.state = {
        isLoading:true,
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ],
      error:null

    };
  }
  fetchUsers() {
   
    fetch('https://reqres.in/api/users?page=1&per_page=10')
      .then(response => response.json())
      .then(results =>
        {
         let users = [...this.state.users, ...results.data];
         users = this.removeDuplicates(users,'id');
         this.setState({
          users: users,
          isLoading: false,
        });
      }

      )

      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.fetchUsers();
  }

  deleteUser = (id) =>{
     if (window.confirm('Are you sure you wish to delete this item?')){ 
    let users = this.state.users.filter((user) => {
        return id !== user.id;
    });

    this.setState(state => {
        state.users = users;
        return state;
    });
  }
}
  removeDuplicates = (users,id) => {
    return users.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[id]).indexOf(obj[id]) === pos;
});
  }


  render() {
    const { isLoading, users, error } = this.state;
      const userList = users.map(user => {
        return <PearsonUser
        user={user}
        key={user.id}
        deleteUser={this.deleteUser.bind(this,user.id)}/>
      })
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        <div className="flex-container">
      {error ? <p>{error.message}</p> : null}
      {!isLoading ? userList :  (
        <h3>Loading...</h3>
      )}
      </div>
      </div>
    );
  }
}
